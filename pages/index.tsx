import { memo } from "react";
import AppsLoader from "components/system/Apps/AppsLoader";
import Desktop from "components/system/Desktop";
import Taskbar from "components/system/Taskbar";
import useGlobalErrorHandler from "hooks/useGlobalErrorHandler";
import useGlobalKeyboardShortcuts from "hooks/useGlobalKeyboardShortcuts";
import useIFrameFocuser from "hooks/useIFrameFocuser";
import useUrlLoader from "hooks/useUrlLoader";
import Head from "next/head";

const Index = (): React.ReactElement => {
  useIFrameFocuser();
  useUrlLoader();
  useGlobalKeyboardShortcuts();
  useGlobalErrorHandler();

  return (
    <>
      <Head>
        <title>James Morgan IT Solutions</title>
        <meta name="description" content="James Morgan - an experienced IT specialist offering bespoke contract services. Proudly showcasing DaedalOS, a cutting-edge desktop environment within a browser. For an optimal viewing experience, open the browser app within the DaedalOS environment for more information about myself and the services I am used to offering." />
      </Head>
      <Desktop>
        <Taskbar />
        <AppsLoader />
      </Desktop>
    </>
  );
};

export default memo(Index);
