import { NoteWrapper } from './cpnts/note/Note'
import styles from './Styles.module.scss'

import post1ContentImage from './assets/post1/post-image.jpg'
import post1ProfileImage from './assets/post1/profile-image.jpg'

import post2ContentImage from './assets/post2/post-image.jpg'
import post2ProfileImage from './assets/post2/profile-image.png'

import post3ContentImage from './assets/post3/post-image.png'
import post3ProfileImage from './assets/post3/profile-image.jpeg'

import post4ContentImage from './assets/post4/post-image.png'
import post4ProfileImage from './assets/post4/profile-image.png'

export function Feed() {

    return (

        <div className={styles.rootWrapper_Feed}>

            <NoteWrapper note={
                {
                    contentText: 'We’re excited to share that new members have joined the community this month! Together, we make the open-source ecosystem even stronger.',
                    contentImagePath: post1ContentImage,
                    profileImagePath: post1ProfileImage,
                    profileName: 'The Linux Foundation'
                }
            } />

            <NoteWrapper note={
                {
                    contentText: 'The new version of Firefox is now available for download! Faster, safer, and with new privacy tools just for you.',
                    contentImagePath: post2ContentImage,
                    profileImagePath: post2ProfileImage,
                    profileName: 'Firefox'
                }
            } />

            <NoteWrapper note={
                {
                    contentText: 'We’re reviewing ideas submitted by the community for Plasma Desktop. Thank you to everyone who contributed!',
                    contentImagePath: post3ContentImage,
                    profileImagePath: post3ProfileImage,
                    profileName: 'KDE Community'
                }
            } />
            
            <NoteWrapper note={
                {
                    contentText: 'Every line of code shared is a brick in the foundation of a freer digital future. Open-source thrives because of people like you — dreamers, builders, contributors. Whether it’s a bug fix, documentation, or a donation, your support matters. Together, we’re not just building software, we’re shaping a world where knowledge and freedom belong to everyone.',
                    contentImagePath: post4ContentImage,
                    profileImagePath: post4ProfileImage,
                    profileName: 'Open-source Community'
                }
            } />

        </div>
    )
}