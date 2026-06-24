import ApiResponse from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

// const healthCheck = (req, res) => {
//   try {
//     res
//       .status(200)
//       .json(new ApiResponse(200, { message: "Health check passed" }));
//   } catch (err) {
//     res.status(500).json(new ApiResponse(500, null, "Internal server error"));
//   }
// };

const healthCheck = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json(new ApiResponse(200, { message: "Health check passed" }));
});

export default healthCheck;
