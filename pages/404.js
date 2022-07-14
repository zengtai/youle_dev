import Layout from "../components/Layout";

export default function Custom404({ categories }) {
  return (
    <Layout navItems={categories}>
      <div className="container mx-auto flex h-full justify-center">
        <div className="m-4 mt-20 text-center">
          <h1 className="text-3xl">404</h1>
          <p>Page not found.</p>
        </div>
      </div>
    </Layout>
  );
}
