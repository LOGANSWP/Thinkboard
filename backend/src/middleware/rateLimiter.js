import ratelimit from "../config/upstash.js"


const rateLimiter = async (req, res, next) => {
    try {
        // Because we didn't set a specific userId as a param in limit().
        // So if one exceeds limit, everyone won't be able to access.
        const { success } = await ratelimit.limit("my-limit-key")

        if (!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later."
            })
        }

        next()
    } catch (error) {
        console.log("Rate limit error", error)
        next(error)
    }
}

export default rateLimiter