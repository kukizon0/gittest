import Image from 'next/image'

export default function Detail(props:any) {
    // const data = JSON.stringify(props.book)
    return (
        <div>
             <Image
            // className={styles.logo}
            src={props.book_img_link}
            alt="Next.js Logo"
            width={150}
            height={150}
            priority
          />
          <div>
            <h2>{props.book_title}</h2>
            <p>{props.author}</p>
          </div>

          <div>
            <h3>{props.headline1}</h3>
            <p>{props.content1}</p>
          </div>
          
          <div>
          <h3>{props.headline2}</h3>
            <p>{props.content2}</p>
          </div>

          <div>
            <h3>{props.detail_explanation_title}</h3>
            <p>{props.detail_explanation_content}</p>
          </div>
<div>
  
</div>
        </div>
    )
}
