import { AiOutlineDownload } from "react-icons/ai";

export const DownloadImage = ({image}) => {
    console.log(image)
  return (
    <a href={image} download={image}>
    <AiOutlineDownload className="h-6 w-6 ml-2" />
    </a>
  )
}
