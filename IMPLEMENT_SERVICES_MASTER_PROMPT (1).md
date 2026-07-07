# IMPLEMENT_SERVICES_MASTER_PROMPT.md

> **Project:** Gourmetica Website **Objective:** Implement every service
> page **1:1** using the provided content and assets. This is an
> implementation task, **not** a content generation task.

------------------------------------------------------------------------

# 1. Goal

Implement dedicated pages for:

-   Branding
-   Website Design & Development
-   Search Engine Optimisation (SEO)
-   Advertising
-   Social Media Management
-   Photography
-   Email Marketing
-   Google Business Profile Optimisation

The implementation must preserve the exact content supplied by the
client.

------------------------------------------------------------------------

# 2. Absolute Rules

1.  DO NOT rewrite any copy.
2.  DO NOT shorten paragraphs.
3.  DO NOT improve grammar.
4.  DO NOT generate marketing text.
5.  DO NOT use placeholder or random images.
6.  Only use banner images from:

``` text
/public/images/services/
```

7.  Every **Learn More** button must navigate to the corresponding
    service page.
8.  Reuse existing Core, Blocks and Features.
9.  Zero TypeScript errors.
10. Zero ESLint warnings.

------------------------------------------------------------------------

# 3. Architecture

Dependency Flow

App → Features → Blocks → Core

Never violate layer boundaries.

------------------------------------------------------------------------

# 4. Routes

/services

/services/branding

/services/website-design-development

/services/search-engine-optimisation

/services/advertising

/services/social-media-management

/services/photography

/services/email-marketing

/services/google-business-profile-optimisation

------------------------------------------------------------------------

# 5. Shared Page Layout

Hero Banner

↓

Introduction

↓

Feature Grid

↓

CTA

↓

Footer

No additional sections unless explicitly defined.

------------------------------------------------------------------------

# 6. Hero Rules

-   Full-width banner
-   Use supplied banner image only
-   Dark overlay
-   Centered heading
-   Desktop height: 600px
-   Tablet: 420px
-   Mobile: 340px

------------------------------------------------------------------------

# 7. Shared Design Rules

Container: 1280px

Padding: - Desktop: 48px - Tablet: 32px - Mobile: 20px

Section spacing: - 120px top - 96px bottom

Feature grid: - Desktop: 2 columns - Tablet: 2 columns - Mobile: 1
column

Gap: 72px

------------------------------------------------------------------------

# 8. Navigation Rules

Navbar Services → /services

Every Learn More button → Matching service page

No broken links.

------------------------------------------------------------------------

# 9. Branding Page

Banner

/public/images/services/Branding.png

Use the EXACT client content supplied in the project brief.

Remove the old Branding bullet list from the services overview card and
replace it with: - Branding - Short description - Learn More

------------------------------------------------------------------------

# 10. Website Design & Development

Banner

/public/images/services/Website Design.png

Use the exact supplied introduction and features.

------------------------------------------------------------------------

# 11. SEO

Banner

/public/images/services/SEO.png

Implement: - Introduction - Long SEO expertise section - SEO Audit -
On-Site SEO - Conversion Tracking - Off-Site SEO

Exactly as provided.

------------------------------------------------------------------------

# 12. Social Media Management

Banner

/public/images/services/SOCIAL MEDIA MANAGEMENT.png

Implement every supplied subsection exactly.

------------------------------------------------------------------------

# 13. Photography

Banner

/public/images/services/Photography.png

Implement every supplied subsection exactly.

------------------------------------------------------------------------

# 14. Advertising

Banner

/public/images/services/Advertising.png

Implement every supplied subsection exactly.

------------------------------------------------------------------------

# 15. Email Marketing

Create dedicated page using the supplied client content only.

------------------------------------------------------------------------

# 16. Google Business Profile Optimisation

Create dedicated page using the supplied client content only.

------------------------------------------------------------------------

# 17. Component Rules

Reuse:

-   HeroBlock
-   SectionHeaderBlock
-   FeatureGridBlock
-   CTASectionBlock
-   Footer

Do not duplicate layouts.

------------------------------------------------------------------------

# 18. Responsive

Desktop Tablet Mobile

Must match existing Gourmetica design language.

------------------------------------------------------------------------

# 19. Motion

Use existing Framer Motion wrappers.

No excessive animation.

------------------------------------------------------------------------

# 20. Acceptance Criteria

-   Build passes
-   Lint passes
-   Tests pass
-   No placeholder images
-   Exact client copy
-   Pixel-consistent spacing
-   Learn More navigation works
-   Navbar navigation works
-   Reuse architecture
-   Production-ready implementation

------------------------------------------------------------------------

## IMPORTANT

The detailed content for each service (paragraphs, headings and feature
descriptions) must be copied **verbatim** from the client specification.
Do not alter wording, punctuation or formatting.


Logo Design
Brand Identity Systems
Print & Marketing Collateral
Signage & Interior Concepts 
(remoeve these thing in branding service section) 

Branding section 

make different page for these for branding when learn more ios there there should be have different page and also it link when user click on learn more in service page ands also they can acces using navbar section service same to the every service 
Learn More :
banner image - D:\Agency\Clients\gourmetica-website\public\images\services\Branding.png

Branding
Your brand is more than a logo.
We create memorable brands through strategy, design and storytelling—helping businesses build trust, stand out and create lasting connections with their audience.
Logo Design
Create a distinctive logo that reflects your brand identity and leaves a lasting impression.


Brand Identity
Develop a consistent visual identity across every customer touchpoint.

Print & Marketing Collateral
Professional brochures, menus, business cards and printed materials designed to strengthen your brand.

Signage & Interior Design
Extend your brand beyond digital with signage and interior concepts that create memorable customer experiences.



Website Design & Development :

Website Design & Development
Your website is often the first impression of your business—and first impressions matter.
We design and develop fast, responsive and conversion-focused websites that combine exceptional user experience with modern design. Whether you're launching a new website or improving an existing one, every solution is built to support your business goals and drive measurable results.



Learn More:
banner - D:\Agency\Clients\gourmetica-website\public\images\services\Website Design.png

Custom Design
Every website is uniquely designed to reflect your brand and support your business objectives.

Responsive Design
Optimised for desktop, tablet and mobile to deliver a seamless experience on every device.

Easy Content Management
Update pages, images and content effortlessly through a simple, user-friendly CMS.

SEO Ready
Built with technical SEO best practices to improve visibility and support long-term growth.

Fast Performance
Optimised for speed, security and reliability to deliver an exceptional user experience.

Conversion Focused
Designed to turn visitors into enquiries, bookings and customers through thoughtful user journeys.


Search Engine Optimization (SEO)


Search Engine Optimisation (SEO)
Great businesses deserve to be found.
We develop SEO strategies that improve your visibility, increase organic traffic and help your business rank for the searches that matter most. Every strategy is built around sustainable, measurable growth—not short-term wins.

Learn More:
banner image -  D:\Agency\Clients\gourmetica-website\public\images\services\SEO.png

Gain long Terms Success through our proven SEO expertise
Unleashing the full potential of Search Engine Optimization, we empower your business to gain substantial traction in the online realm. With our unwavering commitment to delivering exceptional results, we utilize cutting-edge techniques, meticulous keyword research, and optimized content to propel your website towards the pinnacle of search engine rankings. As a result, your enterprise will enjoy enhanced visibility, increased website traffic, and a formidable online presence that will solidify its standing as a force to be reckoned with.

Partner with us to unlock the remarkable benefits that SEO bestows upon businesses of all sizes. Together, we shall embark on a path towards lasting success, firmly establishing your brand at the forefront of the digital landscape and garnering the attention and acclaim it truly deserves.


SEO Audit

Not sure where you stand in results? An SEO Audit demystifies the process it takes for customers to find your information.


below these reuired boxes 
On-Site SEO
The content and design of your page is more important than you may think. Make sure your website is primed to read relevant to search engines.

Conversion Tracking
While your website may possess an appealing aesthetic and provide valuable information, it's crucial to assess its true revenue-generating potential. Monitor customer engagement with your website to determine the actual conversion rates and uncover the tangible impact it has on your bottom line.

Off-Site SEO
While your website boasts an abundance of valuable content, it is imperative to establish a sense of trust with search engines. Forge connections with esteemed and reputable resources within your industry to gain the recognition you rightfully deserve. By aligning your website with authoritative entities, you can enhance its credibility and foster a stronger relationship with search engines.


Social Media Management 

Managing and leveraging popular social media platforms (such as Facebook, Instagram, Twitter) to engage with your audience, promote your brand, and drive customer engagement.

learn more 
banner - D:\Agency\Clients\gourmetica-website\public\images\services\SOCIAL MEDIA MANAGEMENT.png
SOCIAL MEDIA MANAGEMENT (SMM)
From the initial stages of strategizing to the ultimate execution, our unwavering support encompasses a wide array of services. We deftly craft bespoke strategies tailored to each platform, devising channel-specific solutions that elevate audience engagement. Our adept team oversees every facet of the process, including account creation, branding, campaign management, community nurturing, as well as comprehensive research and analysis.

Be it Facebook, Instagram, Twitter, LinkedIn, Google+, or Pinterest, we possess the expertise to harness the true potential of the platform that best aligns with your objectives. Together, we will cultivate a thriving social media presence, reaping the remarkable benefits that await within this dynamic digital realm.



(SMA) Social Media Advertising
Give your brand a voice in the places where customers are listening. Advertising on social media speaks volumes to potential customers.



Review Management
Steer conversations in the right direction by keeping an eye on your business reviews and feedback.

Customer Engagement
Use your social media interactions to reward loyal customers and to encourage potential customers.

Social Media Posting
Build a community around your brand. Create posts to strengthen ties with existing and developing customers.

Influencer Engagement
Make a strategic connection with the contacts that matter most. Social media influencers have expansive fan bases that give you access to new networks.

Content Marketing
Creating compelling and relevant content, such as blog posts, articles, and videos, to establish your business as an authoritative source and attract potential customers.


photography 

Our photography service as a marketing agency goes beyond capturing stunning visuals; we expertly craft compelling narratives through our lens, creating impactful imagery that elevates your brand, engages your audience, and drives meaningful connections that lead to increased brand recognition and business growth.

learn more - 
banner - D:\Agency\Clients\gourmetica-website\public\images\services\Photography.png
Photography
It’s all about presentation. Create images of your cuisine to entice customers

Product Photography
Express that your brand is more than food and location by displaying all of your offerings creatively.

Interior Photography
Invite your customers into your space by showing off the atmosphere of your business.

Cinemagraphs
Experience the perfect fusion of visual enchantment, captivating your customers with dynamic imagery that mesmerizes their senses.

Virtual Tours
Immerse customers in the enticing experience of your busines by enticing them to step inside and guiding them on a captivating journey throughout your welcoming establishment.



Advertising
Performance-driven advertising that delivers measurable growth.
From Google Ads and Meta campaigns to remarketing and conversion optimisation, we help businesses reach the right audience, reduce wasted spend and generate real business results.

learn more - 
banner - D:\Agency\Clients\gourmetica-website\public\images\services\Advertising.png
ADVERTISING
Our marketing wizards have honed the skill of irresistible allure through our advertising prowess. Allow us to assist you in pinpointing your ideal audience precisely when they are primed to be captivated, igniting a love affair from the very first glimpse. Whether it's retargeting, display ads, influencer marketing, PPC ads, or an array of other dynamic techniques, we possess the perfect arsenal of tools to entice new customers and propel your business to unprecedented heights.


Display Advertising
Get more than just a glance and help customers visualize your business through effective image.

(SEM) Search Engine Marketing
Make sure your ads are present when a customer is searching.

Video Marketing
Invite customers to see themselves inside of your business with video ads.

Retargeting
Ensure that your advertisements have left a lasting impact and occupy.


Email Marketing :
Stay connected with the customers who already know your brand.
From automated journeys and newsletters to personalised campaigns, we help businesses increase repeat purchases, improve customer retention and build lasting relationships through data-driven email marketing.


Google Business Profile Optimisation
Being on Google isn't enough—being visible is what matters.
We optimise your Google Business Profile to improve local rankings, increase visibility and attract more enquiries. From profile management and local SEO to reviews and performance optimisation, we help your business stand out where customers are searching.


