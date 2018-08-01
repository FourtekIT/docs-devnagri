/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f92d1e8de3859d52f9c0ef8dbbab458e"
  },
  {
    "url": "assets/css/8.styles.4a7e5fc4.css",
    "revision": "9eefd79a60778c0314806c526d53ab9b"
  },
  {
    "url": "assets/img/Account_Setting.2b7eb9f1.png",
    "revision": "2b7eb9f18f3989199187ab2e568e0aff"
  },
  {
    "url": "assets/img/Active_Projects2.12c4ab5f.png",
    "revision": "12c4ab5f82c2b8275ba7e7cb4d352c9f"
  },
  {
    "url": "assets/img/Add_file.a6e2a1ae.png",
    "revision": "a6e2a1ae7ef928cc68341e3495d59d4f"
  },
  {
    "url": "assets/img/Add_Picture2.561ded3b.png",
    "revision": "561ded3bb6abe4cdc4c680c451e12507"
  },
  {
    "url": "assets/img/addglossary.a7df89c0.png",
    "revision": "a7df89c0050d7d0473fa0008de43b685"
  },
  {
    "url": "assets/img/AddTranslator.c75153a4.png",
    "revision": "c75153a4260022b299fe8d3808a08d86"
  },
  {
    "url": "assets/img/AssignOrders1.2abe5e98.png",
    "revision": "2abe5e988efc56f0f93dee48af270190"
  },
  {
    "url": "assets/img/Billing_Details.7d7461a6.png",
    "revision": "7d7461a6c2845a7fdcdd3311ad0d2014"
  },
  {
    "url": "assets/img/Comment.dd0e0dbe.png",
    "revision": "dd0e0dbe8af14f02e3f0535522a0a81c"
  },
  {
    "url": "assets/img/Complete1.c6736a7f.png",
    "revision": "c6736a7faeaa41e12072680c1ff5c7a3"
  },
  {
    "url": "assets/img/Completed_Project2.efcf1c8c.png",
    "revision": "efcf1c8c8063aae425012d545de7e4ca"
  },
  {
    "url": "assets/img/CreateNewProject.3d3dc5f0.png",
    "revision": "3d3dc5f0c42753266b249e3fc4be5b19"
  },
  {
    "url": "assets/img/Dashboard.bed3bc1d.png",
    "revision": "bed3bc1db7fb5af17f1703723cbf2eab"
  },
  {
    "url": "assets/img/Discussion.3250194c.png",
    "revision": "3250194c26067d4e569c797814e8dd17"
  },
  {
    "url": "assets/img/donotdisp.99794087.png",
    "revision": "9979408773a3e0eda45a4f1a0017b642"
  },
  {
    "url": "assets/img/Donottrans.07bd06ed.png",
    "revision": "07bd06ed370d7d9c09847c1d930af59c"
  },
  {
    "url": "assets/img/Earnings1.431eafaf.png",
    "revision": "431eafafd9aae4fb5f6309836ddf22c9"
  },
  {
    "url": "assets/img/FileUpload.1342fd76.png",
    "revision": "1342fd763d8810c933d20ac8ac81cad2"
  },
  {
    "url": "assets/img/Fontsize.ae31bbb5.png",
    "revision": "ae31bbb56b723856ae3ec45ab0908cfa"
  },
  {
    "url": "assets/img/glossaryadd.4e8ce98a.png",
    "revision": "4e8ce98a5a69f9aafb8655b3a1be881f"
  },
  {
    "url": "assets/img/Glossaryview.26278d39.png",
    "revision": "26278d391d1c65f02464d2f23b3c3137"
  },
  {
    "url": "assets/img/Instructionbox.1e2a2151.png",
    "revision": "1e2a2151f98ccf400b16c68ea409ae9b"
  },
  {
    "url": "assets/img/Instructiondisplay.81723060.png",
    "revision": "817230601f8f0c9b8583e24a0ae4490f"
  },
  {
    "url": "assets/img/KS.73f33e2f.png",
    "revision": "73f33e2f77c8dbbffc27108fbb6df6b3"
  },
  {
    "url": "assets/img/OrderPlan.b42c7ec6.png",
    "revision": "b42c7ec60d002efcabde66440563098e"
  },
  {
    "url": "assets/img/orders_2.d17902eb.png",
    "revision": "d17902eb0cd2f9acea4307bf8b9f2ca8"
  },
  {
    "url": "assets/img/Orders_progress.bee36344.png",
    "revision": "bee36344c26e9eca234e1e3c437a5eff"
  },
  {
    "url": "assets/img/OrderSystem.2e7f31b0.png",
    "revision": "2e7f31b0e95b07a72e90784fa3ead3ea"
  },
  {
    "url": "assets/img/Profile.7ce56ade.png",
    "revision": "7ce56adeee59dce64c145ccbc4887e06"
  },
  {
    "url": "assets/img/Project_Description.fe6e753c.png",
    "revision": "fe6e753c9e195e10b90937fa06ae3fb3"
  },
  {
    "url": "assets/img/ProjectDescription.15cd94b0.png",
    "revision": "15cd94b07d81e9856b9cc62daec574a9"
  },
  {
    "url": "assets/img/ProjectDetail.efb1f0be.png",
    "revision": "efb1f0be164460caebe9fdd690e01b28"
  },
  {
    "url": "assets/img/screenshot-app.devnagri.com-2018.07.18-10-32-34.7edc99a1.png",
    "revision": "7edc99a1dc6937fce576322aabca084e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Select_All.1cb7850f.png",
    "revision": "1cb7850ffeba10dfb5fbeabda36c3133"
  },
  {
    "url": "assets/img/Select_Language.5a0a2816.png",
    "revision": "5a0a28164b80ef719ec2d137ce74a859"
  },
  {
    "url": "assets/img/Sign_in_client.9a3cbc7f.png",
    "revision": "9a3cbc7fae115bd46cb22e660f22a7a6"
  },
  {
    "url": "assets/img/Sign_Up_Client.0b9c984f.png",
    "revision": "0b9c984fb3e6cf6868fdc28e4e299bec"
  },
  {
    "url": "assets/img/summary.8aae0b49.png",
    "revision": "8aae0b498567ea692ea3d87a5b2f7871"
  },
  {
    "url": "assets/img/Total_Projects2.8d7141c1.png",
    "revision": "8d7141c1ee9a11c9947ba13cd0cf051f"
  },
  {
    "url": "assets/img/TranslateTerm.921cbe3d.png",
    "revision": "921cbe3de6c7c4e13f70c40ce3aeeb87"
  },
  {
    "url": "assets/img/Translation_order_plan.e5f11e60.png",
    "revision": "e5f11e60eb0fe1a3e2de5c83b704cced"
  },
  {
    "url": "assets/img/Translation.9cc279c0.png",
    "revision": "9cc279c048d3d28f1108c74ca61b3ea2"
  },
  {
    "url": "assets/img/TransTranslator1.0fa09398.png",
    "revision": "0fa09398b2d1e20753a17adef5a99b91"
  },
  {
    "url": "assets/img/Try_Proofreading.2501951a.png",
    "revision": "2501951a43e59acbd836dfff80073df0"
  },
  {
    "url": "assets/js/0.92e1ce68.js",
    "revision": "d04a15094a65989e56f34c021f8fbe65"
  },
  {
    "url": "assets/js/1.8d49054e.js",
    "revision": "c5137e7ccd83354912bd44b5f0d55c12"
  },
  {
    "url": "assets/js/2.9f84970e.js",
    "revision": "28aa3e8d597e2886d485e3e6e017ff58"
  },
  {
    "url": "assets/js/3.bbaaf843.js",
    "revision": "20dbbed0d8dce375bb660599dd44020d"
  },
  {
    "url": "assets/js/4.ac12f08c.js",
    "revision": "cc7a9a6d1da74ca0262a9cfe970354a2"
  },
  {
    "url": "assets/js/5.4aea99f8.js",
    "revision": "390b768e96e37beb834c34558cc12b6d"
  },
  {
    "url": "assets/js/6.366a0122.js",
    "revision": "fa983bff37fb90c63a2957ef985791cd"
  },
  {
    "url": "assets/js/7.94b7ecf7.js",
    "revision": "b5f91cbba5bed20941da776f27a224a4"
  },
  {
    "url": "assets/js/app.184a6004.js",
    "revision": "c8fba185d30439f805fa85ba4e8a5080"
  },
  {
    "url": "guide/Api.html",
    "revision": "0a8ede8e03f373b3b2fc651aa2cf741f"
  },
  {
    "url": "guide/Client-Guide.html",
    "revision": "a6a0dac0f646b6a3b421095c08e622e8"
  },
  {
    "url": "guide/Glossary.html",
    "revision": "b00ce6e440608dca30aa96fa4a7724a0"
  },
  {
    "url": "guide/index.html",
    "revision": "66d5f93342c2d3dc4abb8e59de2e4ab7"
  },
  {
    "url": "guide/Translator.html",
    "revision": "e41b698a944214cd047a2cf78d4450ef"
  },
  {
    "url": "hero.png",
    "revision": "7d464de30a65b371e920e6b549a9b860"
  },
  {
    "url": "index.html",
    "revision": "c5dbe043501722abc9c3b7ff0a5ce300"
  },
  {
    "url": "logo-dark.png",
    "revision": "8e1257edb3c9d94e1fe2b0c8005460b0"
  },
  {
    "url": "logo.png",
    "revision": "ff5aa24891fcc8c65199325c00bc4ebe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
