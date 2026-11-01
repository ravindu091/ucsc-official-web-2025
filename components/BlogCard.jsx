import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

export const BlogCard = ({ data }) => {
  if (!data) return null;

  const imageSrc =
    data.imageUrl || data.featuredImage || data.image || "/images/blogs/ieee-day.png";

  return (
    <article className="group flex flex-col h-full bg-white border border-secondary-white hover:border-primary-blue/30 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <Link href={`/blog/${data.slug}`} className="flex flex-col h-full">
        {/* Featured Image Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-secondary-white">
          <Image
            src={imageSrc}
            alt={data.title || "Blog Post"}
            fill
            className="object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {data.category && (
            <div className="absolute top-3 left-3 bg-primary-white/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-blue border border-secondary-white/80 shadow-xs">
              {data.category}
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="flex flex-col flex-1 p-6">
          {/* Metadata Row */}
          <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-[2px] bg-primary-blue" />
              <span className="font-semibold uppercase tracking-wider text-secondary-blue text-[11px]">
                {data.category || "Blog"}
              </span>
            </div>
            {data.date && (
              <span className="flex items-center gap-1.5 text-neutral-500">
                <FaCalendarAlt className="text-primary-blue/70 text-[10px]" />
                {data.date}
              </span>
            )}
          </div>

          {/* Title */}
          <h2
            className="text-lg md:text-xl font-bold text-secondary-blue group-hover:text-primary-blue leading-snug line-clamp-2 transition-colors duration-200 mb-2"
            title={data.title}
          >
            {data.title}
          </h2>

          {/* Short Description */}
          <p className="text-sm text-neutral-600 line-clamp-3 leading-relaxed flex-1 mb-4">
            {data.shortDescription || data.description}
          </p>

          {/* Card Footer */}
          <div className="pt-4 mt-auto border-t border-secondary-white flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-blue group-hover:text-secondary-blue transition-colors duration-200">
              Read Article
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1 text-primary-blue" />
            </span>
            <span className="text-xs text-neutral-400">IEEE UCSC</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;