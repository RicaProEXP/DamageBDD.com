### DamageBDD Product Web Site

This repository contains the source files for the product page of [DamageBDD](https://damagebdd.com), a Behavior-Driven Development (BDD) framework at scale, leveraging the power of Emacs and Org mode. The site is generated using `org-publish`, a tool within Emacs that converts Org files into a static HTML site. The project follows a clean, minimalist approach, reflecting DamageBDD's commitment to transparent and verifiable software behavior.

### Instructions for Generating the Site


To generate the site from your Org files using the provided `org-publish` configuration, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/damagebdd-site.git
   cd damagebdd-site
   ```

2. **Set Up Your Emacs Environment:**
   Ensure your Emacs is configured to load the necessary packages for Org mode and `org-publish`.

3. **Prepare the Org Files:**
   - Store your Org files in the `~/Org/damagebdd/` directory.
   - Assets like images, CSS, and JavaScript should go into the `~/Org/damagebdd/assets/` directory.

4. **Configure Org-Publish:**
   Add the following configuration to your Emacs initialization file (usually `.emacs` or `init.el`):

   ```emacs-lisp
   (setq org-publish-project-alist
         '(
           ("damagebdd.staging.pages"
            :base-directory "~/Org/damagebdd/"
            :base-extension "org\\|jpeg"
            :publishing-directory "/var/www/staging.damagebdd.com/"
            :recursive t
            :publishing-function org-html-publish-to-html
            :auto-preamble t
            :auto-sitemap t
            :auto-index t
            :sitemap-title "DamageBDD - BDD at scale."
            :sitemap-filename "sitemap.org"
            :sitemap-sort-files anti-chronologically
            :makeindex t
            :sitemap-format-entry org-sitemap-date-entry-format
            :section-numbers nil
            :with-toc nil
            :html-doctype "html5"
            :html-html5-fancy t
            :html-head-include-scripts nil
            :html-head-include-default-style nil
            :html-head ,damagebdd-html-head
            :html-preamble ,damagebdd-html-preamble
            :html-postamble ,damagebdd-html-postamble)
           ("damagebdd.staging.static"
            :base-directory "~/Org/damagebdd/assets/"
            :base-extension "css\\|js\\|png\\|jpg\\|jpeg\\|gif\\|pdf\\|mp3\\|ogg\\|swf\\|ttf\\|map\\|svg\\|woff\\|woff2\\|ico"
            :publishing-directory "/var/www/staging.damagebdd.com/assets/"
            :recursive t
            :publishing-function org-publish-attachment)
           ("damagebdd.prod.pages"
            :base-directory "~/Org/damagebdd/"
            :base-extension "org"
            :publishing-directory "/var/www/damagebdd/"
            :recursive t
            :publishing-function org-html-publish-to-html
            :auto-preamble t
            :auto-sitemap t
            :auto-index t
            :sitemap-title "DamageBDD - BDD at scale."
            :sitemap-filename "sitemap.org"
            :sitemap-sort-files anti-chronologically
            :with-toc nil
            :html-doctype "html5"
            :html-html5-fancy t
            :html-head-include-scripts nil
            :html-head-include-default-style nil
            :html-head ,damagebdd-html-head
            :html-preamble ,damagebdd-html-preamble
            :html-postamble ,damagebdd-html-postamble)
           ("damagebdd.prod.static"
            :base-directory "~/Org/damagebdd/assets/"
            :base-extension "css\\|js\\|png\\|jpg\\|jpeg\\|gif\\|pdf\\|mp3\\|ogg\\|swf\\|ttf\\|map\\|svg"
            :publishing-directory "/var/www/damagebdd/assets/"
            :recursive t
            :publishing-function org-publish-attachment)))
   ```

5. **Publish the Site:**
   - To publish the staging version:
     ```emacs-lisp
     (org-publish-project "damagebdd.staging.pages" t)
     ```
   - To publish the production version:
     ```emacs-lisp
     (org-publish-project "damagebdd.prod.pages" t)
     ```

6. **Deploy the Site:**
   - Ensure the output files are correctly deployed to your web server's root directories (`/var/www/staging.damagebdd.com/` and `/var/www/damagebdd/`).

By following these instructions, you can easily manage and deploy updates to your DamageBDD website using Org mode and Emacs.
