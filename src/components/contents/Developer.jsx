import React from 'react'

import { developerText } from '../../data/developer';
import { Link } from 'react-router-dom';

const Developer = () => {
    return (
        <section id='developer'>
            <h2>😪 추천 개발자를 소개합니다.</h2>
            <div className="develpoer__inner overflow">
                {developerText.map((developer, key) => (
                    <div className="develpoer" key={key}>
                        <div className="develpoer__img play__icon">
                            <Link to={`/channel/${developer.channelId}`}>
                                <img src={developer.img} alt={developer.name} />
                            </Link>
                        </div>
                        <div className="develpoer__info">
                            <Link to={`/channel/${developer.channelId}`}>
                                {developer.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Developer