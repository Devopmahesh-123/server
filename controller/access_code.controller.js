import Access_code from "../model/Access_code.js";

export const accessCodeController = async(req, res, next) => {
  try{
    const { code } = req.body;
    // Server-side validation
    if (!code || isNaN(code) || code.length !== 6 || code.charAt(5) === '7') {
        return res.status(400).json({ error: 'Verification Error' });
    }
    // If validation passes, treat request as success
    res.json({ success: true });
  } catch(error){
    res.status(500).json({ message:"Internal server error"});
  }
}

