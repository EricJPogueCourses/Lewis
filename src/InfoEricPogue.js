import React from 'react'
import photo from './InfoEricPoguePhoto.png';

const infoEricPogue = () => {
	return (

<div>
<h4>Your Instructor</h4><br />
<img src={photo} alt="Eric Pogue" height="200" /><br /><br />
<h5>Eric Pogue</h5>
Email: <a href="mailto:webmaster@example.com">epogue@lewisu.edu</a><br />
Mobile Phone: <a href="tel: +15632097280">(563)209-7280</a><br />
Short Bio: Professional software developer and software development manager turned college 
instructor.<br /><br />

<p>How to Contact Me?</p>
<p>For most questions please utilize our <em>“Class Forum” Discussion Board (preferred)</em> or 
email me directly. History suggests that posts to our Class Forum get the quickest and highest 
quality responses. However, if your question is of personal nature, email is your best alternative. 
In either case, you can expect a maximum response time of 24 hours weekdays.</p>
<p>If you need an immediate response, call my mobile phone.</p>
</div>

	)
};

export default infoEricPogue