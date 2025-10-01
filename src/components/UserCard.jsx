import React from 'react'

const UserCard = ({user}) => {
    console.log(user)
    const {firstName, lastName, age, gender, photoUrl, skills, about } = user;
    return user && (
        <div className='flex justify-center my-5'>
            <div className="card bg-base-300 shadow-sm max-w-96">
                <figure className='w-96 max-h-72 overflow-hidden'>
                    <img
                        src={photoUrl}
                        alt="Profile photo" className='w-full h-auto object-cover'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstName + " " + lastName}</h2>
                    {age && gender && <p>{age + ", " + gender}</p>}
                    {skills && <p>Skills: {skills.join(", ")}</p>}
                    <p>{about}</p>
                    <div className="card-actions justify-center m-4">
                        <button className="btn btn-primary">Ignored</button>
                        <button className="btn btn-secondary">Interested</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;
