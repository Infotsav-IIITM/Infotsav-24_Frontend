// import React from 'react'
//import TabComponent from "../Components/EventDescription/TabComponent";
import ParticlesBackground from "../Components/ParticlesBackground";
import MakingEventCard from "../Components/EventDescription/MakingEventCard";
// import ComingSoon from '../Components/ComingSoon'

function EventDetails() {
    return (
        <div>
            {/* <ComingSoon /> */}
            <ParticlesBackground />
            {/* <TabComponent /> */}
            <div className="mt-10 sm:mt-30">
                <MakingEventCard />
            </div>
        </div>
    );
}

export default EventDetails;
