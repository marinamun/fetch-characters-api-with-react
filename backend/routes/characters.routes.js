const router = require("express").Router();

/* GET home page */
router.get("/", async (req, res) => {
  try {
    const responseFromAPI = await fetch(
      "https://ih-crud-api.herokuapp.com/characters"
    );
    if (responseFromAPI.ok) {
      const charactersFromAPI = await responseFromAPI.json();
      res.json({ characters: charactersFromAPI });
    }
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const responseFromAPI = await fetch(
      `https://ih-crud-api.herokuapp.com/characters/${req.params.id}`
    );
    if (responseFromAPI.ok) {
      const characterFromAPI = await responseFromAPI.json();
      res.json({ character: characterFromAPI });
    }
  } catch (error) {
    console.error(error);
  }
});

//Create a new character
router.post("/characters", async (req, res) => {
  try {
    //Send the user's added data to the backend
    const responseFromAPI = await fetch(
      "https://ih-crud-api.herokuapp.com/characters",
      {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
          "Content-Type": "application-json",
        },
      }
    );
    //if the data was successfully entered in the DB, notify the user in the frontend
    if (responseFromAPI.ok) {
      const newCharacter = await responseFromAPI.json();
      res.status(201).json(newCharacter); //201="Created", message to the user in the frontend
    }
  } catch (error) {
    console.log(error);
  }
});

//Update a character
router.put("/characters/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const responseFromAPI = await fetch(
      `https://ih-crud-api.herokuapp.com/characters/${id}`, {
        method:"PUT",
        body: JSON.stringify(req.body),
        headers: {
          "Content-Type":"application-json"
        }
      }
    );
    if (responseFromAPI.ok){
      const characterFromApi = await responseFromAPI.json()
      res.json({character: characterFromApi})
    }
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;

// https://ih-crud-api.herokuapp.com/characters
