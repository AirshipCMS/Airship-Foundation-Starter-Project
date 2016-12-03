# Airship Foundation Starter Project 
The Airship Foundation Starter Project is for someone who has an introductory level of programming knowledge about HTML and Javascript tools: Foundation, SASS, Gulp, NodeJS, Bower. Use this as starter boilerplate for your project, or rip out all the tools and replace them with your own favorite workflow tools. Basic Source Code Management (like Git or Birbucket) is highly recommended, though not required.  

#### Airship Basic Starter Project 
(Coming Soon) The Airship Basic Starter Project is for someone who knows HTML and CSS and can open a terminal window to run a few commands. If you are just getting into web development, or you do print design and want to start learning web design, this is a great demo to start off with.

#### Airship SPA Starter Project
(Coming Soon) If you already know how to build an Angular or React project, then you might be looking for a CMS that can host your project and allow a non-technical manager access to just a portion of your application content. Check out how a SPA works with Airship in the Airship SPA Starter Project.

----

# How to Use this Boilerplate
If you want to use a Foundation + Gulp basis for your project, follow all the steps for Airship Project Setup, then after you have run `airship land` for your project, copy over relevant code from this repo to your project directory. If you are copying the exact project structure, here are the files you may want to copy:
- the entire `scss` directory (the partials for foundation_components.scss and foundation_settings.scss may need to be updated if Foundation has released a newer version)
- `.gitignore`, `bower.json`, `gulpfile.js`, and `package.json`.
- `/compartments/layouts/application.html`  
- `/compartments/root.html`  
- all scripts inside of `/compartments/assets/scripts` (these are base Foundation scripts, may need to be updated if Foundation has released newer versions)

If you have `public make` turned on for a collection, you will need:
- `/compartments/layouts/airmail.html`  
- `/compartments/airmail/contact-form_email.html`  

If you have eCommerce enabled, you will need:
- `/compartments/layouts/airmail.html`  
- `/compartments/airmail/invoice.html`  
- `/compartments/airmail/receipt.html`  
- `/compartments/airmail/shipment.html`  

You should already be familiar with node, so all you need to do to run the boilerplate is run `npm install`, `bower install` and then `gulp`.

----

# Airship Project Setup  
- Login to the [Skyport](http://skyport.airshipcms.io) to create a new project.
- Login to your Project's Airship CMS Admin Panel. For example: [Example Project](http://example-project.airshipcms.io/admin)  
- Set up the Pages and Collections for your project.  
- Add in placeholder content to each Page and Collection (without this, you won't be able to see anything on the site when you develop locally!)

----

## Airship CLI Launcher
You only need to install the Airship CLI Launcher to your computer when you first start developing Airship projects. Only developers/superadmins need this tool. Non-technical admins can do all their work in the online Airship CMS Admin portal.

### Installing the cli tools on a Mac or Linux
Download and install the latest version of the cli at:  
[install.airshipcms.io](https://install.airshipcms.io)

### Installing the cli tools for Windows
Nope. Airship CMS CLI Launcher is not available for Windows.  
Get a Mac OSX ^10.?.? or use Linux.

### About the Launcher
The Airship CLI tool allows you to `airship serve` content locally from your Airship CMS Project. It also allows you to `airship land` to sync files down to your computer from the server, and `airship launch` to deploy your project.

----

## Local Development Setup
In your terminal, navigate to an _empty directory_ for your project. If you are using an SCM tool, this is the root directory for your repository.

- Run `airship login projectsubdomain`, and `y` to set the project root. Enter your superadmin email and password for the project  
- Run `airship land` to retrieve the initial project files.
- Run `airship serve` to render propeller markup, and serve content from Airship CMS.
- Add the markup `{{{help}}}` in any template file to see what data is available for rendering.
- Use Chrome to view the locally running project at `localhost:9001`

----

## Project Directory Structure
```
.airship
/compartments
  /airmail
  /layouts
  /partials
  /assets
    /styles
    /scripts
    /media
  /templates
/(other development project directories and assets go out here)
```
- All `compartments` will sync with Airship.
- `layouts` and `templates` mirror the layouts & templates set in the CMS for each page and collection.
- `assets` contains 3 directories: `scripts`, `styles` and `media`. Do not add any other directories or files immediately inside of `assets`. T
- You can add any number of files or subdirectories inside of `scripts`, `styles` and `media`.
- Allowed file types in `scripts`: [need to document]
- Allowed file types in `styles`: [need to document]
- Allowed file types in `media`: [need to document]
- Keep your pre-processed code and and files outside of the `compartments` directory.

----

## Airship CLI Commands

### List all airship commands
This lists all airship cli commands.

```
airship
```

### airship login 
Log in to your project with your _superadmin_ access level *email*, your *password*, and your AirshipCMS *subdomain*.  
```
airship login projectname
```
You will be prompted to enter your email (careful, backspace is disabled).  
Then you will be prompted to enter your password.  

Note: `airship login [projectname]` connects you to the airship server for the project globally on your computer. If you have landed the project in more than one location, logging in will open the connection to airship for the project in all those locations.

### airship land
Do this the *first time you work on the project*. This pulls down necessary Airship config files and initial project structure. After the first time, you should have all your files frequently backed up in Git, so you will never really have to run _airship land_ anymore, and you can simply create and launch your new files without ever landing again.  
```
airship land
```
If for some reason you want to pull down the files that are live, you can run airship land again. *Be sure you have backed up your local files* because airship land will overwrite them.

### airship serve
Airship serve runs the server that will locally render layouts, templates, and pull content from Airship CMS. Keep this runnind in a dedicated a terminal tab, and use other tabs to run other airship commands and other project processes.

```
airship serve
```

### airship launch
When you are ready to launch your local changes to production, run *airship launch*. This will overwrite all files on the server to match your local project structure. If you have added files locally, they will be added to the server. If you have deleted files locally, they will be deleted from the server.
```
airship launch
```
If for some reason you need to back up the state of production compartments, then *airship land* files in a separate directory, or better yet, you already have them backed up in a different branch using your source code management tool.

### airship upgrade
If the launcher notifies you that an update is available for the launcher, run this command.
```
airship upgrade
```

### airship logout
```
airship logout
```
Note: `airship logout` disconnects you from the airship server for the project globally on your computer. If you have landed the project in more than one location, logging out will close the connection to airship for the project in all those locations.

----

## Source Code Management
If you are using a source code management tool, you will probabaly only need to `airship land` the first time you set up the project. If your code is safely committed, you may occasionally want to run `airship land` to investigate diffs between local and production files. 
Be sure to `.gitignore` your `bower_components and node_modules`. It is also safe to .gitignore the `.airship` directory of your project.
