import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/signup_page.css';
import logo from '../Styles/logo.png'
const Signup_page = () => {
  const [isClicked, setisClicked] = useState(true);
  
  return (
    <div>
      <div className="main-container">
        {/* Left Div */}
        <div className="left-section">
          <div className="left_data_heading">
            <div className="group_left_top_box">
              <div className="stats-section">
                <div className="stats-top-box">
                  <div className="Main-heading-page">
                    <img src={logo} alt="CodeAnt AI" />
                    <h2 className="AI_heading">AI to Detect & Autofix Bad Code</h2>
                  </div>
                  <div className='stats-data'>
                    <p className='subheading_stats'>
                      <strong>30+</strong><br />
                      <div className="AI_subheading">Language Support</div>
                    </p>
                    <p className='subheading_stats'>
                      <strong>10K+</strong><br />
                      <div className="AI_subheading">Developers</div>
                    </p>
                    <p className='subheading_stats'>
                      <strong>100K+</strong><br />
                      <div className="AI_subheading">Hours Saved</div>
                    </p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="flex-row">
                    <div className="icon-container">
                      <div className="icon-inner"></div>
                    </div>
                    <div className="flex-row-text">
                      <svg className="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H8M17 7V16"></path>
                      </svg>
                      <span>14%</span>
                    </div>
                  </div>
                  <div className="issues-fixed">Issues Fixed</div>
                  <div className="fixed-count">500K+</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Div */}
        <div className="right-section">
          <div className="right-content">
            <div className="header_content_icon">
              <img src={logo} alt="CodeAnt AI" />
              <h1>CodeAnt AI</h1>
            </div>
            <h3>Welcome to CodeAnt AI</h3>
            <div className="button-group">
              <button className="saas-btn_sass btn_sign_in" onClick={() => setisClicked(true)} style={{ backgroundColor: isClicked ? '#1570EF' : '#FFFF' }}>SAAS</button>
              <button className="self-hosted-btn_self btn_sign_in" onClick={() => setisClicked(false)} style={{ backgroundColor: !isClicked ? '#1570EF' : '#FFFF' }}>Self Hosted</button>
            </div>
            <div className="bottom_line_right"></div>
            {isClicked ? (
              <div className="sign-in-buttons sass_oriented">
                <Link to="/Main/Repository" className="sass_oriented_sign">
                  <div><img src="./github.png" alt="Github image" className='sign_image_icon' /><span>Sign in with GitHub</span></div>
                </Link>
                <Link to="/Main/Repository" className="sass_oriented_sign">
                  <div><img src="./bitbucket.png" className='sign_image_icon' alt="bitbucket_icon" /><span>Sign in with Bitbucket</span></div>
                </Link>
                <Link to="/Main/Repository" className="sass_oriented_sign">
                  <div className="sass_oriented_dev"><img src="./azure.png" alt="azure_icon" className='sign_image_icon' /><span>Sign in with Azure DevOps</span></div>
                </Link>
                <Link to="/Main/Repository" className="sass_oriented_sign">
                  <div><img src="./gitlab.png" alt="gitlab_icon" className='sign_image_icon' /><span>Sign in with GitLab</span></div>
                </Link>
              </div>
            ) : (
              <div className="sign-in-buttons Self_oriented">
                <Link to="/Main/Repository" className='Self-Hosted-GitLab self-oriented_sign'>
                  <div><img src="./gitlab.png" alt="gitlab_icon" className='sign_image_icon' /><span>Self-Hosted-GitLab</span></div>
                </Link>
                <Link to="/Main/Repository" className='Sign-with-SSO self-oriented_sign'>
                  <div><img src="./key.png" className='sign_image_icon' alt="key_image" /><span>Sign in with SSO</span></div>
                </Link>
              </div>
            )}
          </div>

          {/* Privacy Policy */}
          <div className="privacy-policy">
            <p>By signing up you agree to the <a href="/privacy-policy">Privacy Policy</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup_page;
