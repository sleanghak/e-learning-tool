import { ApiVersion } from "@/utils/interface/APIContant";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { createSwaggerSpec } from "next-swagger-doc";
import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUI = dynamic<{
  spec: any;
}>(import("swagger-ui-react"), { ssr: false });

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Next Swagger API Example",
        version: "1.0",
      },
      basePath: "/v1",
      schemes: ["http", "https"],
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
          OAuth2: {
            type: "oauth2",
            flows: {
              authorizationCode: {
                authorizationUrl: "https://example.com/oauth/authorize",
                tokenUrl: "https://example.com/oauth/token",
                scopes: {
                  read: "Grants read access",
                  write: "Grants write access",
                },
              },
            },
          },
        },
      },
      security: [],
    },
  });

  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;
