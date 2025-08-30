import React from "react";
import background from "./background.png";
import card2 from "./card-2.png";
import ellipse5 from "./ellipse-5.png";
import gradient2 from "./gradient-2.png";
import gradient3 from "./gradient-3.png";
import gradient4 from "./gradient-4.png";
import gradient5 from "./gradient-5.png";
import gradient from "./gradient.png";
import group2 from "./group-2.png";
import group1935 from "./group-1935.png";
import group1938 from "./group-1938.png";
import header from "./header.png";
import iconParkSolidClick2 from "./icon-park-solid-click-2.svg";
import iconParkSolidClick4 from "./icon-park-solid-click-4.svg";
import iconParkSolidClick5 from "./icon-park-solid-click-5.svg";
import icons from "./icons.png";
import image11 from "./image-1.png";
import image2 from "./image-2.png";
import image1 from "./image.png";
import image from "./image.svg";
import logo from "./logo.png";
import maskGroup2 from "./mask-group-2.png";
import maskGroup3 from "./mask-group-3.png";
import maskGroup4 from "./mask-group-4.png";
import maskGroup from "./mask-group.png";
import screenshot20220920At11441 from "./screenshot-2022-09-20-at-11-44-1.png";
import screenshot20220920At114422 from "./screenshot-2022-09-20-at-11-44-2-2.png";
import screenshot20220920At11442 from "./screenshot-2022-09-20-at-11-44-2.png";
import screenshot20220930At104912 from "./screenshot-2022-09-30-at-10-49-1-2.png";
import screenshot20220930At10491 from "./screenshot-2022-09-30-at-10-49-1.png";
import screenshot20220930At104933 from "./screenshot-2022-09-30-at-10-49-3-3.png";
import screenshot20220930At10493 from "./screenshot-2022-09-30-at-10-49-3.png";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector1 from "./vector.png";
import vector from "./vector.svg";

const navigationItems = [
  { name: "Home", position: { top: "42px", left: "1111px" } },
  { name: "About", position: { top: "42px", left: "1345px" } },
  { name: "Lab", position: { top: "42px", left: "1581px" } },
];

const experienceCards = [
  {
    id: 1,
    title: "Web Developer",
    description:
      "Building interactive websites and dashboards using React & Next.js.",
    buttonText: "View Projects",
    image: group2,
    maskImage: maskGroup2,
    gradient:
      "linear-gradient(110deg,rgba(19,4,40,1) 7%,rgba(37,16,67,1) 34%,rgba(56,18,109,1) 57%,rgba(38,16,69,1) 85%,rgba(25,6,52,1) 100%)",
    position: { top: "1251px", left: "463px" },
  },
  {
    id: 2,
    title: "Hardware Specialist",
    description:
      "Skilled in assembling, disassembling, and upgrading PCs with optimized performance builds.",
    buttonText: "LEARN MORE",
    image: group1935,
    maskImage: maskGroup,
    gradient:
      "linear-gradient(96deg,rgba(19,4,40,1) 7%,rgba(37,16,67,1) 34%,rgba(56,18,109,1) 57%,rgba(38,16,69,1) 85%,rgba(25,6,52,1) 100%)",
    position: { top: "1251px", left: "1053px" },
  },
  {
    id: 3,
    title: "Kali Linux User",
    description:
      "Experienced in using Kali Linux for penetration testing, system security, and troubleshooting tasks.",
    buttonText: "LEARN MORE",
    image: group1938,
    maskImage: maskGroup3,
    gradient:
      "linear-gradient(96deg,rgba(19,4,40,1) 7%,rgba(37,16,67,1) 34%,rgba(56,18,109,1) 57%,rgba(38,16,69,1) 85%,rgba(25,6,52,1) 100%)",
    position: { top: "1461px", left: "463px" },
  },
  {
    id: 4,
    title: "Multi-Stack Coder",
    description:
      "Coding across web, mobile, game, and automation stacks — building versatile solutions with clean, efficient code.",
    buttonText: "View Projects",
    image: icons,
    maskImage: maskGroup4,
    gradient:
      "linear-gradient(150deg,rgba(19,4,40,1) 7%,rgba(37,16,67,1) 34%,rgba(56,18,109,1) 57%,rgba(38,16,69,1) 85%,rgba(25,6,52,1) 100%)",
    position: { top: "1458px", left: "1055px" },
  },
];

const featuredProjects = [
  {
    id: 1,
    title: "Solar Explorer Project",
    description:
      "An interactive web app for exploring the solar system. Navigate through planets, view real-time details, and experience space in an immersive, design-driven interface that blends science with creativity.",
    image: image2,
    screenshots: [
      screenshot20220930At10491,
      screenshot20220930At10493,
      screenshot20220920At11442,
    ],
    icons: [iconParkSolidClick2, image],
    position: { top: "2786px", left: "462px" },
  },
  {
    id: 2,
    title: "Virtual Assistant Project",
    description:
      "A virtual assistant web app powered by voice interaction. Users can speak directly to HAZEM for an AI-driven experience that blends futuristic design with practical functionality.",
    screenshots: [image1, screenshot20220920At11441],
    icons: [iconParkSolidClick5, iconParkSolidClick4],
    position: { top: "3337px", left: "961px" },
  },
];

const socialIcons = [
  { icon: vector3, alt: "Social media icon 1" },
  { icon: vector2, alt: "Social media icon 2" },
  { icon: vector, alt: "Social media icon 3" },
];

export const Portfolio = () => {
  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white overflow-hidden w-[1980px] h-[4400px] relative">
        <div className="absolute w-[1980px] h-[4400px] top-0 left-0">
          <img
            className="absolute w-[1980px] h-[4298px] top-[102px] left-0"
            alt="Background"
            src={background}
          />

          <img
            className="absolute w-[642px] h-[720px] top-[2580px] left-[858px]"
            alt="Gradient"
            src={gradient5}
          />

          <img
            className="absolute w-[625px] h-[700px] top-[1022px] left-[739px]"
            alt="Gradient"
            src={gradient3}
          />

          <img
            className="absolute w-[625px] h-[700px] top-[2604px] left-[1166px]"
            alt="Gradient"
            src={gradient2}
          />

          <img
            className="absolute w-[572px] h-[641px] top-[3166px] left-[274px]"
            alt="Gradient"
            src={gradient4}
          />

          <img
            className="absolute w-[385px] h-[431px] top-[220px] left-[385px]"
            alt="Gradient"
            src={gradient}
          />

          <div className="absolute w-[583px] h-[341px] top-[2762px] left-[1047px]">
            <img
              className="top-[2494px] left-[90px] absolute w-[583px] h-[341px]"
              alt="Screenshot"
              src={screenshot20220930At10491}
            />

            <img
              className="top-0 left-0 absolute w-[583px] h-[341px]"
              alt="Screenshot"
              src={screenshot20220930At10493}
            />

            <img
              className="absolute w-[568px] h-[354px] top-[3040px] left-[82px]"
              alt="Screenshot"
              src={screenshot20220920At11442}
            />
          </div>

          <div className="absolute w-[583px] h-[341px] top-[3330px] left-[460px]">
            <img
              className="top-[2494px] left-[90px] absolute w-[583px] h-[341px]"
              alt="Screenshot"
              src={image1}
            />

            <div className="absolute w-[583px] h-[341px] top-0 left-0 bg-[url(/screenshot-2022-09-30-at-10-49-3-2.png)] bg-[100%_100%]">
              <img
                className="absolute w-[549px] h-[316px] top-[25px] left-0 object-cover"
                alt="Screenshot"
                src={screenshot20220920At11441}
              />
            </div>
          </div>

          <img
            className="absolute w-[1980px] h-[138px] top-0 left-0"
            alt="Header"
            src={header}
          />

          {navigationItems.map((item, index) => (
            <div
              key={index}
              className={`w-[66px] h-[27px] top-[${item.position.top}] left-[${item.position.left}] [font-family:'Plus_Jakarta_Sans-SemiBold',Helvetica] font-semibold text-xl text-center tracking-[0.40px] absolute text-white leading-[normal]`}
              style={{ top: item.position.top, left: item.position.left }}
            >
              {item.name}
            </div>
          ))}

          <div className="absolute w-[674px] h-[90px] top-[660px] left-[474px] [font-family:'Preahvihear-Regular',Helvetica] font-normal text-white text-[50px] tracking-[1.00px] leading-[normal]">
            I&#39;m a Code Architect.
          </div>

          <p className="absolute h-[126px] top-[379px] left-[727px] [font-family:'Preahvihear-Regular',Helvetica] font-normal text-transparent text-[50px] tracking-[1.00px] leading-[63.3px]">
            <span className="text-white tracking-[0.50px]">
              Judges a book
              <br />
              by its{" "}
            </span>

            <span className="text-[#7127ba] tracking-[0.50px]">cover</span>

            <span className="text-white tracking-[0.50px]">...</span>
          </p>

          <div className="absolute h-[31px] top-[351px] left-[718px] [font-family:'Preahvihear-Regular',Helvetica] font-normal text-white text-[17px] text-center tracking-[0.34px] leading-[normal] underline">
            A Developer That
          </div>

          <p className="absolute h-5 top-[508px] left-[727px] [font-family:'Preahvihear-Regular',Helvetica] font-normal text-white text-[11px] text-center tracking-[0.22px] leading-[normal]">
            Because if the cover does not impress you what else can?
          </p>

          <p className="absolute w-[892px] h-[120px] top-[844px] left-[477px] [font-family:'Preahvihear-Regular',Helvetica] font-normal text-white text-[22px] tracking-[0.44px] leading-[normal]">
            A self-taught Code Architect, functioning in the industry for 3+
            years now. I build versatile digital solutions — from websites and
            apps to game scripts — that create an equilibrium between user needs
            and business goals.
          </p>

          <div className="absolute h-[72px] top-[1134px] left-[468px] [font-family:'Preahvihear-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0.80px] leading-[normal]">
            Coding Experience
          </div>

          <p className="absolute w-[245px] h-5 top-[245px] left-[707px] [font-family:'Preahvihear-Regular',Helvetica] font-normal text-transparent text-[19px] text-center tracking-[-0.50px] leading-[97px] whitespace-nowrap">
            <span className="text-white tracking-[-0.10px]">Hello! I Am </span>

            <span className="text-[#7127ba] tracking-[-0.10px]">
              Hazem Khaled
            </span>
          </p>

          <div className="absolute w-[92px] h-[82px] top-[242px] left-[618px] rotate-[-148.29deg]">
            <img
              className="absolute w-[78px] h-12 top-[17px] left-[7px] rotate-[148.29deg]"
              alt="Vector"
              src={vector1}
            />
          </div>

          <img
            className="absolute w-[188px] h-[60px] top-[442px] left-[877px]"
            alt="Ellipse"
            src={ellipse5}
          />

          <div className="h-[45px] top-[3904px] left-[458px] [font-family:'Preahvihear-Regular',Helvetica] font-normal text-[25px] tracking-[0.50px] absolute text-white leading-[normal]">
            Contact
          </div>

          <p className="absolute h-[108px] top-[4022px] left-[458px] [font-family:'Preahvihear-Regular',Helvetica] font-normal text-white text-[15px] tracking-[0.30px] leading-[normal]">
            I&#39;m currently looking to join a cross-functional team that
            values improving people&#39;s lives
            <br />
            through accessible design. or have a project in mind? Let&#39;s
            connect.
            <br />
            <br />
            tranother0@gmail.com
          </p>

          <img
            className="absolute w-[35px] h-[43px] top-[35px] left-[497px]"
            alt="Logo"
            src={logo}
          />

          <div className="absolute w-[594px] h-[43px] top-[738px] left-[474px]">
            <p className="absolute w-[592px] h-[43px] top-0 left-0 [font-family:'Preahvihear-Regular',Helvetica] font-normal text-transparent text-[21px] tracking-[0.42px] leading-[normal]">
              <span className="text-white tracking-[0.09px]">
                Currently, I&#39;m a Code Architect
                at&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              </span>

              <span className="text-[#1877f2] tracking-[0.09px]">
                Instagram
              </span>
            </p>
          </div>

          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="h-[193px] absolute w-[574px]"
              style={{ top: card.position.top, left: card.position.left }}
            >
              <div className="relative w-[592px] h-[197px] -top-1 left-[-22px]">
                <div
                  className="top-1 absolute w-[570px] h-[193px] left-[22px] rounded-[15px] shadow-[4px_7px_26px_#0000001f]"
                  style={{ background: card.gradient }}
                />

                <img
                  className="absolute w-[592px] h-[172px] top-0 left-0"
                  alt="Mask group"
                  src={card.maskImage}
                />

                <div className="absolute w-64 top-[50px] left-[219px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-white text-[26px] tracking-[0] leading-[32.5px] whitespace-nowrap">
                  {card.title}
                </div>

                <p className="absolute w-[232px] top-[85px] left-[220px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[8px] tracking-[0] leading-[10.5px]">
                  {card.description}
                </p>

                <div className="absolute w-[121px] h-[33px] top-[116px] left-[217px]">
                  <div className="relative w-[119px] h-[33px] bg-[url(/rectangle-977-3.svg)] bg-[100%_100%]">
                    <div className="absolute w-[77px] top-2.5 left-[19px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[10px] text-center tracking-[0] leading-[15px] whitespace-nowrap">
                      {card.buttonText}
                    </div>
                  </div>
                </div>

                <img
                  className="absolute w-[122px] h-[115px] top-10 left-[72px]"
                  alt="Group"
                  src={card.image}
                />
              </div>
            </div>
          ))}

          <div className="absolute w-[583px] h-[341px] top-[2762px] left-[1047px]">
            <div className="relative h-[341px]">
              <img
                className="top-[2494px] left-[90px] absolute w-[583px] h-[341px]"
                alt="Screenshot"
                src={screenshot20220930At104912}
              />

              <img
                className="top-0 left-0 absolute w-[583px] h-[341px]"
                alt="Screenshot"
                src={screenshot20220930At104933}
              />

              <img
                className="absolute w-[568px] h-[354px] top-[3040px] left-[82px]"
                alt="Screenshot"
                src={screenshot20220920At114422}
              />
            </div>
          </div>

          <img
            className="absolute w-[669px] h-[165px] top-[2886px] left-[460px]"
            alt="Card"
            src={card2}
          />

          <div className="absolute w-[553px] h-[333px] top-[2786px] left-[462px]">
            <p className="absolute h-[135px] top-[118px] left-3 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#ccd6f6] text-lg tracking-[0] leading-[normal]">
              An interactive web app for exploring the solar system.
              <br />
              Navigate through planets, view real-time details,
              <br />
              and experience space in an immersive,
              <br />
              design-driven interface that blends science with creativity.
            </p>

            <div className="absolute w-[379px] h-[70px] top-0 left-0">
              <div className="absolute h-[51px] top-[19px] left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#ccd6f6] text-[34px] tracking-[0.68px] leading-[normal]">
                Solar Explorer Project
              </div>

              <div className="absolute h-6 top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#9757d3] text-base tracking-[0.32px] leading-[normal]">
                Featured&nbsp;&nbsp;Project
              </div>
            </div>

            <div className="absolute w-[31px] h-[31px] top-[302px] left-[73px] bg-[url(/icon-park-solid-click.svg)] bg-[100%_100%]">
              <img
                className="absolute w-[31px] h-[31px] top-0 left-0"
                alt="Icon park solid"
                src={image}
              />
            </div>

            <img
              className="top-[301px] left-[25px] absolute w-[31px] h-[31px]"
              alt="Icon park solid"
              src={iconParkSolidClick2}
            />
          </div>

          <div className="absolute w-[818px] h-[329px] top-[3337px] left-[961px]">
            <div className="absolute w-[669px] h-[165px] top-24 left-0 bg-[url(/card.png)] bg-[100%_100%]">
              <p className="absolute h-[81px] top-10 left-[34px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#ccd6f6] text-lg tracking-[0] leading-[normal]">
                A virtual assistant web app powered by voice interaction.
                <br />
                Users can speak directly to HAZEM for an AI-driven experience
                <br />
                that blends futuristic design with practical functionality.
              </p>
            </div>

            <div className="absolute w-[430px] h-[70px] top-0 left-[382px]">
              <div className="absolute h-[51px] top-[19px] left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#ccd6f6] text-[34px] tracking-[0.68px] leading-[normal]">
                Virtual Assistant Project
              </div>

              <div className="absolute h-6 top-0 left-[141px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#9757d3] text-base tracking-[0.32px] leading-[normal]">
                Featured&nbsp;&nbsp;Project
              </div>
            </div>

            <div className="absolute w-[31px] h-[31px] top-[298px] left-[596px] bg-[url(/icon-park-solid-click-3.svg)] bg-[100%_100%]">
              <img
                className="absolute w-[31px] h-[31px] top-0 left-0"
                alt="Icon park solid"
                src={iconParkSolidClick4}
              />
            </div>

            <img
              className="top-[297px] left-[548px] absolute w-[31px] h-[31px]"
              alt="Icon park solid"
              src={iconParkSolidClick5}
            />
          </div>

          <div className="absolute w-[895px] h-[754px] top-[1817px] left-[598px] bg-[url(/group-1910.png)] bg-[100%_100%]" />

          <div className="absolute w-[110px] h-[18px] top-[4162px] left-[458px]">
            {socialIcons.map((social, index) => (
              <img
                key={index}
                className="absolute w-[18px] h-[18px] top-0"
                style={{ left: `${index * 46}px` }}
                alt={social.alt}
                src={social.icon}
              />
            ))}
          </div>

          <div className="absolute w-[258px] h-[259px] top-[306px] left-[461px] bg-[url(/ellipse-3.png)] bg-[100%_100%]">
            <img
              className="w-[165px] h-[223px] top-1.5 left-12 absolute object-cover"
              alt="Image"
              src={image11}
            />
          </div>

          <img
            className="w-[549px] h-[278px] top-[2831px] left-[1085px] aspect-[2] absolute object-cover"
            alt="Image"
            src={image2}
          />
        </div>

        <p className="absolute h-10 top-[1065px] left-[-3977px] [font-family:'Preahvihear-Regular',Helvetica] font-normal text-black text-[22px] tracking-[0.44px] leading-[normal]">
          Developed web.hr landing page which is utilized in 25,000+ companies.
        </p>

        <div className="absolute h-[63px] top-[300px] left-[-6366px] [font-family:'Poor_Story-Regular',Helvetica] font-normal text-black text-[50px] text-center tracking-[1.00px] leading-[normal]">
          I&#39;m a Software Engineer.
        </div>

        <div className="absolute h-[60px] top-[626px] left-[-5981px] [font-family:'PoetsenOne-Regular',Helvetica] font-normal text-black text-[50px] text-center tracking-[1.00px] leading-[normal] whitespace-nowrap">
          I&#39;m a Software Engineer.
        </div>

        <div className="absolute h-[648px] top-[1883px] left-[-4592px] [font-family:'Preahvihear-Regular',Helvetica] font-normal text-black text-[40px] tracking-[0.80px] leading-[normal]">
          LinkedIn
          <br />
          &gt;&gt;
          <br />
          Behance
          <br />
          &gt;&gt;
          <br />
          Dribbble
          <br />
          &gt;&gt;
          <br />
          Instagram
          <br />
          &gt;&gt;
          <br />
          logo
        </div>
      </div>
    </div>
  );
};
