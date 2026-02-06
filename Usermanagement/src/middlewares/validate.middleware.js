import { ZodError } from "zod";
export const validate = (schema) => (req, res, next) => {
    try {
        req.body = schema.parse(req.body);
        next();
    } catch (error) {
        console.log("ZOD ERROR:", error);
        if (error instanceof ZodError) {
            return res.status(400).json({
                message: "Validation Failed",
                errors: error.issues, //This is the key 
            });
        }
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
// this is a custom validation middleware that uses ZOD schema to validate the incoming request body
// if the request is vlaid the data is parsed and passed to the next middleware
// otherwise proper error response is sent