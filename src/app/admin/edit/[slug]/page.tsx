import { getArticleBySlug } from "@/utils/articleUtils";
import EditArticleForm from "./EditArticleForm";

export default async function EditArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">エラー</div>
          <p>記事が見つかりません</p>
        </div>
      </div>
    );
  }

  return <EditArticleForm article={article} />;
}
