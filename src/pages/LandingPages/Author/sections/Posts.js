/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/laboral.jpg";
import post2 from "assets/images/laboral_2.jpg";
import post3 from "assets/images/laboral_3.jpg";
import post4 from "assets/images/laboral_4.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="XXXXXXXXXXXXXXXXXXX"
              description="XXXXXXXXXXXXXXXXXXXXXXX"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "XXXXXXXX",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="XXXXXXXXXX"
              description="XXXXXXXXXXXXXXXXXXXXXXX"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "XXXXXXXXX",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
              description="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "XXXXXXXXXXXXXXXXXXXXXXX",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
              description="XXXXXXXXXXXXXXXXXXXXXXXXXXXX"
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                label: "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
