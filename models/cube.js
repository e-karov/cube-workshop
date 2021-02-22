const { v4 } = require('uuid');
const fs = require('fs');
const path = require('path');


const databaseFile = path.join(__dirname, "..", "config/database.json");

class Cube {
    constructor (name, description, imageUrl, difficulty) {
        this.id = v4();
        this.name = name || "No name";
        this.description = description || "";
        this.imageUrl = imageUrl || "https://media.gettyimages.com/photos/rubiks-cube-picture-id523318725?s=2048x2048";
        this.difficulty = difficulty || 0;
    }

    //Save cube

    save() {
        const newCube = {
            id: this.id,
            name: this.name,
            description: this.description,
            imageUrl: this.imageUrl,
            difficulty: this.difficulty
        }

        fs.readFile(databaseFile, (err, data) => {
            if (err) {
                throw err;
            }

            const db = JSON.parse(data);
            db.push(newCube);
            
            fs.writeFile(databaseFile, JSON.stringify(db), (error) => {
                if (error) {
                    throw error;
                }
                
                console.log("New cube was successfully stored!");
                console.log(db);
            })
        })
    }
};

module.exports = Cube;