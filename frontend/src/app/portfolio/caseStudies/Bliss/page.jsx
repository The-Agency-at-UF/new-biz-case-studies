"use client"

export default function BlissHero() {
    const heroStyle = {
        position: "relative", 
        justifyContent: "center",
        alignItems: "center",

        backgroundImage: `
          linear-gradient(to top, rgba(245,80,150,1), rgba(0,0,0,0)),
          url('/assets/Bliss/backgroundImage.png')
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: "hidden", 
        aspectRatio: "16/9",
        width: "100%",
        zIndex: "0",
    }

    const badgeStyle = {
        display: "inline-flex",
        position: "relative",
        top : "35%",
        left : "7%",
        backgroundColor: "#F75296",
        borderStyle: "solid",
        borderWidth: "clamp(2px, 0.5vw, 4px)",
        borderColor: "#75CFE5",
        padding: "0.1vw 1.8vw",
        textAlign: "center",
        fontFamily: "Gentona-Bold, Gentona",
        fontWeight: "700",
        fontSize: "clamp(12px, 2vw, 45px)",
        zIndex: "1",
    };
    
    const logoStyle = {
        position: "relative",
        top: "35%",
        left: "7%",
        width: "clamp(50%, 10vw, 100%)",
        height: "auto",
        zIndex: "1",
    }

    const lineStyle = {
        color: "#75CFE5",
        borderWidth: "clamp(1px, 0.2vw, 3px)",
        width : "clamp(50%, 10vw, 100%)",
        position: "relative",
        top: "37%",
        left : "7%",
        zIndex: "1",
    }

    const heroText = {
        color: "white",
        fontFamily: "Gentona-Bold, Gentona",
        fontWeight: "700",
        fontSize: "clamp(16px, 2vw, 60px)",
        position: "relative",
        top: "40%",
        left: "7%",
        zIndex: "1",
        textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
    }

    const opportunityStyle  = {
        position: "relative",
        backgroundImage: `
          url("/assets/Bliss/opportunityBackground.png")
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overflow: "hidden", 
        aspectRatio: "16/9",
        width: "100%",
        zIndex: "0",
    }

    const opportunityHeader = {
        fontFamily: "Gentona-Bold, Gentona",
        fontWeight: "700",
        fontSize: "clamp(35px, 5vw, 135px)",
        position: "relative",
        top: "15%",
        left: "7%",
        lineHeight: "0.9",
    }

    const opportunityText = {
        position: "relative",
        top: "20%",
        left: "7%",
        width: "50%",
        height: "auto",
    }

    return (
        <>
            <section style={heroStyle}>
                <div style={badgeStyle}> Case Study </div>
                <img
                    src="/assets/Bliss/blissAgencyLogo.png"
                    alt="Bliss Agency Logo"
                    style={logoStyle} />
                <hr style={lineStyle} />
                <div style={heroText}> Helping Bliss Get Skin in the Gen Z Game </div>
        </section>
            <section 
                style={opportunityStyle}>
                    <div style = {opportunityHeader}> THE</div> 
                    <div style = {{...opportunityHeader, color: "#75CFE5"}}> OPPORTUNITY </div>
                    <img
                        src = "/assets/Bliss/opportunityText.png"
                        alt= "Opportunity Text"
                        style = {opportunityText} />
            </section>
        </>
    );
}