import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
             <Image src="" alt="" fill className={styles}/>
        </div>
        <span className={styles.data}>01.01.2024</span>
    </div>
    <div className={styles.bottom}>
       <h1 className={styles.title}>Title</h1>
       <p clssName={styles.desc}> sfadlkfnkldsakfadbk dldsflkjksa ldfkllk
       </p>
       <Link className={styles.link} href="/blog/post">READ MORE</Link>
    </div>
</div>
  )
}

export default PostCard