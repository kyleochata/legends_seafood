import Image from 'next/image'
import Link from 'next/link'

type ImageLinkCardProps = {
  src: string
  alt: string
  width: number
  height: number
  title: string
  content: string
  href: string
  button: string
}

const ImageLinkCard = ({
  src,
  alt,
  width,
  height,
  title,
  content,
  href,
  button,
}: ImageLinkCardProps) => {
  return (
    <section className="imageCard">
      <div className="imageCard__img">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout="responsive"
        />
      </div>
      <div className="imageCard_content">
        <h3>{title}</h3>
        <p>{content}</p>
        <Link href={href}>{button}</Link>
      </div>
    </section>
  )
}
export default ImageLinkCard
