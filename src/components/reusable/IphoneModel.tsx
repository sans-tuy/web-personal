import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function IphoneModel() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/JCuFVyehwDmBHBgD/scene.splinecode" />
      </Suspense>
    </div>
  );
}
