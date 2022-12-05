import Layout from "@/components/Layout";

export default function Custom404({ categories }) {
  // console.log(categories);
  return (
    <Layout navItems={categories} title={`404`}>
      <div className="error">
        <div className="m-4 mt-20 text-center">
          <h1 className="text-3xl">404</h1>
          <p>Page not found.</p>
        </div>
      </div>
    </Layout>
  );
}
