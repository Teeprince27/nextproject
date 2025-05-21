import {
  generateUploadButton,
  generateUploadDropzone,
  generateReactHelpers,
} from "@uploadthing/react";

import { ourFileRouter, type OurFileRouter } from "~/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
// export const UploadButton = () => {};
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

export const {useUploadThing} = generateReactHelpers<OurFileRouter>();


