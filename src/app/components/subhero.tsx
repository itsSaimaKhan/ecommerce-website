import Image from "next/image";

export default function SubHero() {
  return (
    <>
      <div
        className="subText"
        style={{
          width: '559px',
          height: '76.71px',
          position: 'absolute',
          top: '869px',
          left: '449px',
          textAlign: 'center', // Center align the text
        }}
      >
        <h3 style={{ fontWeight: 'bold' }}>Browse The Range</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div
        className="imgArea"
        style={{
          display: 'flex', // Flexbox for layout
          justifyContent: 'center', // Center images horizontally
          gap: '20px', // Space between images
          marginTop: '100px', // Add spacing from the top
        }}
      >
        <div className="imgOne" style={{ textAlign: 'center' }}>
          <Image
            src="/image/image 106.png"
            width={282}
            height={200}
            alt="Dining"
          />
          <h6>Dining</h6>
        </div>

        <div className="imgTow" style={{ textAlign: 'center' }}>
          <Image
            src="/image/living room.png"
            width={282}
            height={200}
            alt="Living"
          />
          <h6>Living</h6>
        </div>

        <div className="imgThree" style={{ textAlign: 'center' }}>
          <Image
            src="/image/Mask Group.png"
            width={282}
            height={200}
            alt="Bedroom"
          />
          <h6>Bedroom</h6>
        </div>
      </div>
    </>
  );
}


