import Layout from "@/components/Layout";

export default function Custom500({ categories }) {
  return (
    <Layout navItems={categories} title={`500`}>
      <div className="error">
        <div className="m-4 mt-20 text-center">
          <h1 className="text-3xl">500 - Server-side error occurred</h1>
        </div>
      </div>
    </Layout>
  );
}
