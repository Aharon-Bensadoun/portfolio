import { getVimeoEmbedUrl } from '../../data/projects'

type VimeoEmbedProps = {
  url: string
  title: string
  className?: string
}

export const VimeoEmbed = ({ url, title, className = '' }: VimeoEmbedProps) => (
  <div
    className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-bg ${className}`}
  >
    <iframe
      src={`${getVimeoEmbedUrl(url)}?title=0&byline=0&portrait=0&color=09090b&dnt=1`}
      title={title}
      className="absolute left-1/2 top-1/2 h-[102%] w-[102%] -translate-x-1/2 -translate-y-1/2 border-0"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
      allowFullScreen
      loading="lazy"
    />
  </div>
)
