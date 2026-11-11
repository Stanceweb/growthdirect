const db = require("../config/db");
const slugify = require("slugify");

// 1 . ADD SERVICE
exports.addService = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const title = req.body.title;
    const description = req.body.description;
    const category_id = req.body.category_id;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const slug = slugify(title, {
      lower: true,
      strict: true,
    });
    const image = req.file ? req.file.filename : null;

    await db.query("CALL sp_add_service (?,?,?,?,?)", [
      title,
      slug,
      description,
      image,
      category_id,
    ]);

    res.json("✅ Service added Succesfully...");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};

// 2. GET SERVICES
exports.getServices = async (req, res) => {
  try {
    const [result] = await db.query("CALL sp_get_services()");
    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};

// 3. GET SERVICE BY ID
exports.getServiceById = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query("CALL sp_get_service_by_id(?)", [id]);
    res.json(result[0][0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};

//  4. UPDATE SERVVICE
exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category_id } = req.body;
    const slug = slugify(title, {
      lower: true,
      strict: true,
    });
    const image = req.file ? req.file.filename : null;
    await db.query("CALL sp_update_service(?,?,?,?,?,?)", [
      id,
      title,
      slug,
      description,
      image,
      category_id,
    ]);
    res.json({ message: "✅ service updated successfully ..." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};

// 5 . DELETE SERVICE
exports.deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("CALL sp_delete_service(?)", [id]);
    res.json({ message: "✅ sevice deleted successfully..." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server error" });
  }
};
