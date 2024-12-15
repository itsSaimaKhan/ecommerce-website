import Image from "next/image";

export default function SubHero() {
  return (
    <>
      {/* Sub Text */}
      <div
        className="subText"
        style={{
          textAlign: 'center', // Center-align all text
          marginBottom: '30px', // Add spacing between text and images
        }}
      >
        <h3 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}>
          Browse The Range
        </h3>
        <p style={{ fontSize: '14px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Area */}
      <div
        className="imgArea"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {/* Dining Image with Text */}
        <div
          className="imgOne"
          style={{
            textAlign: 'center',
            width: '282px',
          }}
        >
          <Image
            src="/image/image 106.png"
            width={282}
            height={200}
            alt="Dining"
          />
          <h3
            style={{
              fontWeight: 'bold',
              fontSize: '18px',
              marginTop: '10px',
            }}
          >
            Dining
          </h3>
        </div>

        {/* Living Image with Text */}
        <div
          className="imgTwo"
          style={{
            textAlign: 'center',
            width: '282px',
          }}
        >
          <Image
            src="/image/living room.png"
            width={282}
            height={200}
            alt="Living"
          />
          <h3
            style={{
              fontWeight: 'bold',
              fontSize: '18px',
              marginTop: '10px',
            }}
          >
            Living
          </h3>
        </div>

        {/* Bedroom Image with Text */}
        <div
          className="imgThree"
          style={{
            textAlign: 'center',
            width: '282px',
          }}
        >
          <Image
            src="/image/Mask Group.png"
            width={282}
            height={200}
            alt="Bedroom"
          />
          <h3
            style={{
              fontWeight: 'bold',
              fontSize: '18px',
              marginTop: '10px',
            }}
          >
            Bedroom
          </h3>
        </div>
      </div>
    </>
  );
}
