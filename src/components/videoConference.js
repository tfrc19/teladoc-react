import React from 'react';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';


const apiKey = '47725631'; 
const sessionId = '1_MX40NzcyNTYzMX5-MTY5NjUwMzkzOTcwOH42alVJbE1jVk1QR2s5TmlHM0U1NXpNbFh-fn4'; 
const token = 'T1==cGFydG5lcl9pZD00NzcyNTYzMSZzaWc9NGYwZjcxNGU5ZGYxZDk0MTNlYTRhZjA4ODY1NTA3NzhmYzY0YjQ4NzpzZXNzaW9uX2lkPTFfTVg0ME56Y3lOVFl6TVg1LU1UWTVOalV3TXprek9UY3dPSDQyYWxWSmJFMWpWazFRUjJzNVRtbEhNMFUxTlhwTmJGaC1mbjQmY3JlYXRlX3RpbWU9MTY5NjUwNDAyMCZyb2xlPXB1Ymxpc2hlciZub25jZT0xNjk2NTA0MDIwLjQ3MTcxODQxMDg5Mzc4JmV4cGlyZV90aW1lPTE2OTY1OTA0MjAmY29ubmVjdGlvbl9kYXRhPXVzZXJuYW1lJTNEQm9iJTJDdXNlckxldmVsJTNENCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ=='; 


function VideoChat() {
  return (    
    <OTSession 
    apiKey={apiKey}
    sessionId={sessionId}
    token={token}>
        
      <div className="publisher">
        <OTPublisher/>
      </div>
      <div className="subscribers">
        <OTStreams>
          <OTSubscriber />
        </OTStreams>
      </div>
    </OTSession>  
  )
}

export default VideoChat;
