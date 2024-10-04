import { Layout, Spin } from "antd";
import { useContext } from "react";
import AppHeader from "./AppHeader.jsx";
import AppSider from "./AppSider";
import AppContent from "./AppContent.jsx";
import CryptoContext from "../../context/crypto-context";

export default function AppLayout() {
  const { loading } = useContext(CryptoContext);

  if (loading) {
    return <Spin fullscreen />;
  }

  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}
