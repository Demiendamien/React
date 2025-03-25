import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, club, nationality, jerseyNumber, age, image }) => (
    <Card style={{ width: "18rem", margin: "10px", boxShadow: "0 8px 4px 0 rgba(0, 0, 0, 0.58)", borderRadius: "50px", color: "Black", backgroundColor: "beige", fontWeight: "bold" }}>

        <Card.Img variant="top" src={image} alt={name} style={{ height: "15rem", objectFit: "cover", width: "100%", height: "40%", borderRadius: "50px", boxShadow: "0 8px 4px 0 rgba(0, 0, 0, 0.58)" }} />

        <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ margin: "20px", fontSize: "20px", textTransform: "uppercase" }}>{name}</Card.Title>
            {/* <Card.Text style={{marginBottom: "10px"}}>
        Équipe : {club} <br />
        Nationalité : {nationality} <br />
        
      </Card.Text> */}
            <Card.Text style={{ marginBottom: "10px", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    Équipe : {club}
                    <img
                        src={`${process.env.PUBLIC_URL}/LogoPSG.jpg`}
                        alt="Logo de l'équipe"
                        style={{ width: "20px", height: "20px", marginRight: "10px" }}
                    />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    Nationalité : {nationality}
                    <img
                        src={`${process.env.PUBLIC_URL}/LogoBarça.jpg`}
                        alt="Logo de la nationalité"
                        style={{ width: "20px", height: "20px", marginRight: "10px" }}
                    />
                </div>
                Numéro : {jerseyNumber} <br />
                Âge : {age}
            </Card.Text>
        </Card.Body>
    </Card>
);

Player.defaultProps = {
    name: "Inconnu",
    club: "Non spécifié",
    nationality: "Non spécifié",
    jerseyNumber: 0,
    age: "Non spécifié",
    imageUrl: "https://example.com/default.jpg"
};

export default Player;
