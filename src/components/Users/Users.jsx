import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0){
    props.setUsers( [
        {id: 1, 
        photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fzooblog.ru%2Fsamye-milye-zhivotnye-v-mire%2F&psig=AOvVaw1_P1A3uPm3eBQhmtPNx7_q&ust=1642076863429000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDPlZebrPUCFQAAAAAdAAAAABAD', 
        followed: true, 
        fullName: 'Max', 
        status: 'i am a boss', 
        location: {city: 'Yakutsk', country: 'Russia'}},

        {id: 2, photoUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F603763893789451380%2F&psig=AOvVaw0406eT9_4Uw7NKpd5Mf8k3&ust=1642076141749000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDq0LCZrPUCFQAAAAAdAAAAABAD', 
        followed: false, fullName: 'Mika', status: 'your daughter', location: {city: 'Viluisk', country: 'Russia'}}
    ])}

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/> 
                    </div>
                    <div>
                        {u.followed
                        ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button> 
                        : <button onClick={() => { props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
  }                                       

export default Users;