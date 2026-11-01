import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const imageSrc =
    post.imageUrl || post.featuredImage || post.image || "/images/blogs/ieee-day.png";

  const paragraphs = post.content
    ? post.content
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
    : [];

  return (
    <main className="min-h-screen px-4 py-14 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
    <article className="mx-auto w-full max-w-4xl">


      <Link
        href="/blog"
        className="text-sm font-semibold text-primary-blue hover:underline mb-6 inline-block"
      >
        ← Back to Blog
      </Link>

      
      {post.category && (
        <span className="text-xs uppercase font-semibold text-primary-blue tracking-wider block mb-2">
          {post.category}
        </span>
      )}

     
      <h1 className="mb-3 wrap-break-word text-3xl font-bold leading-tight text-secondary-blue sm:text-4xl md:text-5xl">
          {post.title}
      </h1>

      
      {post.date && (
        <p className="text-sm text-neutral-500 mb-8">{post.date}</p>
      )}

      
      {/* Featured Image - uniform dimensions */}
      <div className="relative mb-6 aspect-video w-full overflow-hidden bg-secondary-white sm:mb-8">
        <Image
          src={imageSrc}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 896px"
        />
      </div>

      
      {post.shortDescription && (
        <p className="text-lg text-secondary-blue font-medium mb-6 leading-relaxed">
          {post.shortDescription}
        </p>
      )}

      
      <div className="space-y-4 text-secondary-blue/90 leading-relaxed text-base md:text-lg">
        {paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

      
    
      </article>
    </main>
  );
}


