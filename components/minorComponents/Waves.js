import React from 'react'
import Wave from 'react-wavify';
const Waves = () => {
    return (
        <div>
            <Wave
                className='top-[90%] absolute'
                fill='#F9F871'
                paused={false}
                options={{
                    height: 10,
                    amplitude: 20,
                    speed: 0.15,
                    points: 3
                }}
            />
            <Wave
                className='top-[92.5%] absolute'
                fill='#DEF172'
                paused={false}
                options={{
                    height: 13,
                    amplitude: 25,
                    speed: 0.15,
                    points: 3
                }}
            />
            <Wave
                className='top-[95%] absolute'
                fill='#C4EA74'
                paused={false}
                options={{
                    height: 12,
                    amplitude: 15,
                    speed: 0.15,
                    points: 3
                }}
            />
        </div>
    )
}

export default Waves