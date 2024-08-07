import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TabPage } from "./styles/tabpage";
import Navigate from "./global/Navigate";
import Navlist from "./global/navlist";

const aboutusinfo = [
  " National Institute of Technology Patna is the 18th National Institute of Technology, created by the Ministry of Education, Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28th January 2004. NIT Patna marked its humble beginning in 1886 with the establishment of pleaders survey training school, which was subsequently promoted to Bihar College of Engineering Patna in 1924 and making it the 6th oldest engineering institute of India. The graduate level curriculum was later elevated to the post graduate level in 1978. The institute is situated on the south bank of the holy river Ganges behind Gandhi Ghat, one of the most important and reverential places of Patna. The Gandhi Ghat is associated with the immersion of ashes of the Father of the Nation Mahatma Gandhi in the Ganges. The campus has a picturesque river view with historic building, presenting a spectacle of architectural delight and natural beauty.",
  "   National Institute of Technology Patna has been declared as an Institute of National Importance and has been granted a fully Autonomous Status by the Ministry of Education, Government of India. The institute has also been declared as a Centre of Excellence to impart high-level education training, research and development in engineering technology, science and humanities. It is imparting high quality education and values at UG programmes (B.Tech., B.Arch.), PG programmes (M.Tech., MURP., D.D., M.C.A.) and Ph.D. programmes through its experienced faculty, who are well-versed in their respective fields of engineering and technology, with well-equipped laboratories. At present, the institute has thirteen established departments, viz. Architecture and Planning, Civil Engineering, Compute Science and Engineering, Electrical Engineering, Electronics and Communication Engineering, Mechanical Engineering, Mechatronics and Automation Engineering, Material Science and Engineering, Chemical Engineering and Technology, Mathematics, Physics, Chemistry and Humanities and Social Sciences.",
  "    National Institute of Technology Patna aims at setting out very high education standards and holds long records of academic excellence. The pedagogical aspects have been formulated to suit not only the needs of the contemporary industrial requirements but also to develop human potential to its fullest extent in a range of professions. Extra-curricular activities are planned through games and sports, cultural programmes and NSS (National Service Scheme) activities. Cultural activities provide the platform to know about the culture of various states and regions of the nation and the opportunity for national integration.",
  "    Ever since its rechristening, NIT Patna has been on the fast track of development and has undergone numerous facelifts, as evident through its continuously improving NIRF ranks, because of which the placement records have witnessed unprecedented growth and is touching new heights, as the graph of placement is increasing remarkably.",
];

const Vision = "To contribute to India and the World through excellence in scientific and technical education and research; to serve as a valuable resource for industry and society; and to remain a source of pride for all Indians.";

const missioninfo = [
  "To generate new knowledge by engaging in cutting-edge research and to promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programmes",
  "To identify, based on an informed perception of Indian, regional and global needs, areas of specialization upon which the Institute can concentrate",
  "To undertake collaborative projects which offer opportunities for long term interaction with academia and industry",
  "To develop human potential to its fullest extent so that intellectually capable and imaginatively gifted leaders can emerge in a range of profession",
];

const valuesinfo = [
  "Academic integrity and accountability.",
  "Respect and tolerance for the views of every individual.",
  "Attention to issues of national relevance as well as of global concern.",
  "Breadth of understanding, including knowledge of the human sciences.",
  "Appreciation of intellectual excellence and creativity.",
  "An unfettered spirit of explorating, rationality and enterprise.",
];

const campusinfo = "NIT Patna is situated on the South bank of river Ganges behind Gandhi Ghat, one of the most important and sacred places of Patna . The Institute campus is 8 Km from the Patna junction railway station and 20 Km from the Jai Prakash Narayan International Airport, Patna . The entrance to the institute is from Ashok Rajpath and it is about 3Km from the famous Gandhi Maidan. The Institute is residential in nature and provides residential facilities to its students as well as teachers as per availability. Its large campus has a picturesque river view with eyecatching historic buildings presenting a spectacle of architectural and natural beauty.";

const Aboutpage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get("tab");
  const [view, setView] = useState("about");

  function getView(callback) {
    setView(callback);
  }

  useEffect(() => {
    Navlist.home[0].sub.forEach((x) => {
      if (x.data === tab) {
        setView(tab);
      }
    });
  }, [tab]);

  return (
    <TabPage>
      <Navigate data={Navlist.home[0].sub} callback={getView} tab={tab} />
      <div className="mainDiv">
        {view === "about" && (
          <div className="layoutrow digital" id="home">
            <div className="row rowmarl3 rowmarr3">
              <h1>About Us</h1>
            </div>
            {aboutusinfo.map((elem, index) => (
              <div className="row rowmarl3 rowmarr3" key={index}>
                
                <p><br></br>{elem}</p>
              </div>
            ))}
          </div>
        )}
        {view === "missionvision" && (
          <>
            <div className="layoutrow digital" id="mission">
              <div className="row rowmarl3 rowmarr3">
                <h1>Vision</h1>
              </div>
              <div className="row rowmarl3 rowmarr3">
                <p>{Vision}</p>
              </div>
              <div className="row rowmarl3 rowmarr3">
                <h1>Mission</h1>
              </div>
              {missioninfo.map((elem, index) => (
                <div className="row rowmarl3 rowmarr3" key={index}>
                  <p>{elem}</p>
                </div>
              ))}
            </div>
          </>
        )}
        {view === "values" && (
          <div className="layoutrow digital" id="values">
            <div className="row rowmarl3 rowmarr3">
              <h1>Values</h1>
            </div>
            {valuesinfo.map((elem, index) => (
              <div className="row rowmarl3 rowmarr3" key={index}>
                <p>{elem}</p>
              </div>
            ))}
          </div>
        )}
        {view === "campus" && (
          <div className="layoutrow digital" id="campus">
            <div className="row rowmarl3 rowmarr3">
              <h1 data-aos="zoom-in-left">Campus</h1>
            </div>
            <div className="row rowmarl3 rowmarr3">
              <p data-aos="zoom-in-left">{campusinfo}</p>
            </div>
          </div>
        )}
      </div>
    </TabPage>
  );
};

export default Aboutpage;
