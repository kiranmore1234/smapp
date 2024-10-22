import React from 'react';
import { NavLink } from 'react-router-dom';
import Temp from './AboutPages/image.png'
const About = () => {
  return (
    <div className="container">
      <h1 className="my-4 fw-bold">About Our School</h1>
      <div className="row">

        <div className="col-md-6">
          <img
            src={Temp}
            alt="School History"
            className="img-fluid mb-3 w-75 me-5 h-100 mt-4"
          />

        </div>
        <div className="col-md-6 mt-5 fs-3">
          <h2 className='text-primary'>Our History</h2>
          <p className='ms-5'>
            Established in 1990, our school has grown to be one of the leading institutions
            in the region, known for its commitment to academic excellence and student development.
          </p>
          <NavLink
            to="https://www.fergusson.edu/article/history.html"
            className="btn btn-primary fs-5"
          >
            Read More
          </NavLink>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-6 order-md-2">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ZeVDbJfx8rs?si=QL640ijNKQ7gTjsd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="col-md-6 order-md-1 mt-5 fs-3 ">
          <h2 className='text-primary'>Our Vision & Mission</h2>
          <p className='me-5'>
            Our mission is to nurture every student’s potential and prepare them to be lifelong learners
            and responsible citizens who contribute positively to society.
          </p>
          <NavLink
            to="https://www.fergusson.edu/article/Vision&mission.html"
            className="btn btn-primary fs-5"
          >
            Learn More
          </NavLink>
        </div>
      </div>
      <div className='text-start fs-5 fw-bold'>
        <p>
          With the end of the East India Company's regime in India and the failure of
          the first armed uprising in 1857, for India's freedom, a new<br />
          era dawned in our country. It was clear that the emancipation of our land and the
          transformation of the life of our people had to be<br /> brought about by peaceful
          and constitutional means. Indian renaissance had began and it heralded the
          role which education needed to<br /> play to achieve national aspirations. Wood's
          Education Despatch (1854), the Education Commission of 1882 and the
          Hunter Commission (1891), were all indicative of the concerted efforts, of
          both the Government and the Indian people, in the enterprise of education.
          The Founders of the Fergusson College had first started the New English
          School, Pune in 1880 and later established the Deccan Education Society
          (DES) in 1884.The college held these classes, for almost ten years, in the old
          Gadre Wada and other locations in Poona. A plot of about 37 acres (a portion
          of the present extensive campus) was acquired on a 99 years' lease in 1891 by
          the DES. The foundation stone of the Main building of the Fergusson College,
          was laid in 1892 and the building was completed in 1895. The college started
          functioning on this campus in 1895. From then onwards, the college has
          grown from strength to strength and acquired a reputation as a nation-
          building institution.<br /><br />

          While the founders have become legends, in the history of education and
          the freedom struggle in India, it is a matter of great significance, that the college
          received active and moral support from academicians and statesmen, such
          as Principal William Wordsworth, Principal F. G. Selby, Lord Rippon, Sir
          William Wedderburn and Sir James Fergusson.Fergusson College was
          intended to be, "the seminary of the Indian educational missionaries".
        </p>
      </div>

    </div>
  );
};

export default About;