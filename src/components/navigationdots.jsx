import React from 'react'

export default function navigationdots({ active }) {
  return (
    <div className='app__navigation'>
        {[ 'home', 'skills', 'projects', 'contact' ].map((item, index) => {
			return (
				<a 
          className='app__navigation-dot'
          key={item + index}
          href={`#${item}`} 
          style={active === item ? { backgroundColor: '#7b2cbf' } : {}}
                >
				</a>
			);
		})}
    </div>
  )
}
