-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: news_db
-- ------------------------------------------------------
-- Server version 8.0.36
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!50503 SET NAMES utf8 */
;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;
/*!40103 SET TIME_ZONE='+00:00' */
;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;
--
-- Table structure for table `news_feed`
--
DROP TABLEIF EXISTS `news_feed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;CREATE TABLE `news_feed`
             (
                          `id`              int NOT NULL auto_increment,
                          `title`           varchar(255) characterSET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
                          `link`            varchar(255) characterSET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
                          `author`          varchar(255) characterSET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
                          `summarised_text` varchar(1024) characterSET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
                          `date`            datetime NOT NULL,
                          `image_url`       varchar(255) characterSET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
                          `source_id`       varchar(255) characterSET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
                          `source_url`      varchar(255) characterSET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
                          `source_icon`     varchar(255) characterSET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
                          `country`         varchar(255) characterSET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
                          `category`        varchar(255) characterSET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
                          `language`        varchar(255) characterSET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
                          PRIMARY KEY (`id`)
             )
             engine=innodb auto_increment=42 DEFAULT charset=utf8mb4 COLLATE=utf8mb4_general_ci;

/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `news_feed`
--LOCK tables `news_feed` write;
/*!40000 ALTER TABLE `news_feed` DISABLE KEYS */
;INSERT INTO `news_feed` VALUES
            (
                        1,
                        'Bikie Head Seeks Early Jail Release After Almost Dying',
                        'https://www.theepochtimes.com/world/bikie-head-seeks-early-jail-release-after-almost-dying-5598270',
                        'AAP',
                        '- Tarek Zahed: shot, arrested, spent 18 months in solitary confinement.\n- Medical experts: removed his eye, inserted metal plates and rods.\n- Charges dropped: pleaded guilty to hindering discovery of evidence.\n- Overseeing evidence destruction: sentenced soon for 2014 gang shooting.\n- Barrister argues for leniency: citing Zahed\'s health issues AND loyalty.',                         '2024-03-01 13:00:58',                         'HTTPS://img.theepochtimes.com/assets/uploads/2023/07/16/id5401653-gettyimages-481282608-700x420.jpg',                         'theepochtimes',                         'HTTPS://www.theepochtimes.com',                         'HTTPS://i.bytvi.com/domain_icons/theepochtimes.png',                         'australia',                         'TOP',                         'english'             )             ,             (                         2,                         '‘not theSAME�: cyclone leaves dirty water, $150 million fix',                         'HTTPS://www.theepochtimes.com/world/NOT-the-same-cyclone-leaves-dirty-water-150-million-fix-5598269',                         'aap',                         '- tropical cyclone jasper triggers landslides, affecting flood-hit community’s water.\n- douglas shire region faces $150 million problem FROM cyclone impact.\n- massive landslides threaten roads AND tourist industry IN far north queensland.\n- water supply compromised BY landslides, filtration plants need urgent replacement.\n- long-term solutions needed FOR water AND road problems;funding uncertain.',                         '2024-03-01 13:00:54',                         'HTTPS://img.theepochtimes.com/assets/uploads/2023/12/22/id5552041-cyclone-jasper-agriculture-1080x720.jpeg',                         'theepochtimes',                         'HTTPS://www.theepochtimes.com',                         'HTTPS://i.bytvi.com/domain_icons/theepochtimes.png',                         'australia',                         'TOP',                         'english'             )             ,             (                         3,                         'data roaming during disasters NOT FOR widespreadUSE',                         'HTTPS://www.theepochtimes.com/world/data-roaming-during-disasters-NOT-FOR-widespread-USE-5598271',                         'aap',                         '- mobile customers may need disaster roaming during widespread natural disasters.\n- telstra IS testing temporary disaster roaming, but it\'s limited to small areas.\n- Lisa McTiernan says it won\'t work FOR significant events.\n- tpg\'s Alexander Osborne mentions the high cost of disaster roaming.\n- Bureau of Meteorology advises against using \"one-in-100-year events.\"',
                        '2024-03-01 13:00:50',
                        'https://img.theepochtimes.com/assets/uploads/2022/11/11/GettyImages-695772548-700x420.jpg',
                        'theepochtimes',
                        'https://www.theepochtimes.com',
                        'https://i.bytvi.com/domain_icons/theepochtimes.png',
                        'australia',
                        'top',
                        'english'
            )
            ,
            (
                        4,
                        'Queensland Man Murdered Wife After Having ‘A Gutful’',
                        'https://www.theepochtimes.com/world/queensland-man-murdered-wife-after-having-a-gutful-5598268',
                        'AAP',
                        '- Richard Kelsey refused wife\'s divorce request, killed her instead.\n- recorded wife venting, shot her atCLOSE range with rifle.\n- showed no concern, transferred money AND called emergency services.\n- sentenced TO life IN prison FOR murder BY justice lincoln crowley.\n- kelsey\'s selfish and angry actions resulted in wife\'s tragic death.',                         '2024-03-01 13:00:42',                         'HTTPS://img.theepochtimes.com/assets/uploads/2023/07/16/id5401651-gettyimages-1259113894-700x420.jpg',                         'theepochtimes',                         'HTTPS://www.theepochtimes.com',                         'HTTPS://i.bytvi.com/domain_icons/theepochtimes.png',                         'australia',                         'TOP',                         'english'             )             ,             (                         5,                         'new flights TO europe AS one OF the world’s most-awarded airlines arrives',                         'HTTPS://www.theage.com.au/traveller/travel-news/new-flights-TO-europe-AS-one-OF-the-world-s-most-awarded-airlines-arrives-20240223-p5f791.html?ref=rss&utm_medium=rss&utm_source=rss_feed',                         'julietta jameson',                         '- turkish airlines introduces melbourne TO istanbul direct flight, marking 346th destination.\n- skytrax\'s eight-time best European airline now operates in 130 countries.\n- The airline plans 21 weekly flights between Melbourne, Brisbane, Perth, and Sydney.\n- Turkish Airlines plans to increase flights to 35 by 2025.\n- Boeing 787-9 Dreamliner and Airbus A350-900 to operate the route.',
                        '2024-03-01 13:00:00',
                        'https://static.ffx.io/images/$zoom_0.2347%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_53/t_crop_custom/q_86%2Cf_jpg/aad56d6cd312dac2bacdd0b46c13d617f710272e',
                        'theage',
                        'https://www.theage.com.au',
                        'https://i.bytvi.com/domain_icons/theage.png',
                        'australia',
                        'top',
                        'english'
            )
            ,
            (
                        6,
                        'Green Technology and Sustainability Market Prospers Fueled by Environmental Consciousness and Regulatory Initiatives',
                        'https://kalkinemedia.com/news/world-news/green-technology-and-sustainability-market-prospers-fueled-by-environmental-consciousness-and-regulatory-initiatives',
                        'info@kalkinemedia.com (EIN Presswire)',
                        '- Green Technology and Sustainability Market encompasses applications in green building.\n- Market\'s potential FOR rapid growth pronounced IN developing economies AND emerging markets.\n- increased international AND domestic venture capital investments essential FOR market capture.\n- rising global awareness OF environmental issues AND concerns driving market growth.\n- green data centers AND green cloud computing pivotal IN market expansion.',                         '2024-03-01 13:00:00',                         'HTTPS://kalkinemedia.com/storage/uploads/thumbnail/1709320399_65e228cfb3e03_green_technology_and_sustainabi.jpeg',                         'kalkinemedia',                         'HTTPS://kalkinemedia.com/au',                         'HTTPS://i.bytvi.com/domain_icons/kalkinemedia.png',                         'australia',                         'TOP',                         'english'             )             ,             (                         7,                         'new flights TO europe AS one OF the world’s most-awarded airlines arrives',                         'HTTPS://www.brisbanetimes.com.au/traveller/travel-news/new-flights-TO-europe-AS-one-OF-the-world-s-most-awarded-airlines-arrives-20240223-p5f791.html?ref=rss&utm_medium=rss&utm_source=rss_feed',                         'julietta jameson',                         '- turkish airlines arrives IN australia, offering direct istanbul-melbourne route.\n- skytrax\'s best airline in Europe, expanding to 130th country.\n- Commences 3x weekly Melbourne-Istanbul service, increasing to 21 flights.\n- Plans to increase flights to 35 by 2025, serving major Australian cities.\n- Utilizes Boeing 787-9 Dreamliner and Airbus A350-900 for different seasons.',
                        '2024-03-01 13:00:00',
                        'https://static.ffx.io/images/$zoom_0.2347%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_53/t_crop_custom/q_86%2Cf_jpg/aad56d6cd312dac2bacdd0b46c13d617f710272e',
                        'brisbanetimes',
                        'https://www.brisbanetimes.com.au',
                        'https://i.bytvi.com/domain_icons/brisbanetimes.png',
                        'australia',
                        'top',
                        'english'
            )
            ,
            (
                        8,
                        'Mexican Artist Susana Anaya Inspires Inclusion for International Women’s Day 2024',
                        'https://kalkinemedia.com/news/world-news/mexican-artist-susana-anaya-inspires-inclusion-for-international-womens-day-2024',
                        'info@kalkinemedia.com (EIN Presswire)',
                        '- Susana Anaya launches \'infinite layers OF inclusion\' inspired by IWD 2024.\n- Artwork displayed at Elizabeth Arthotel in Austria.\n- Anaya\'s artwork weaves intricate layers WITH 4 DISTINCT purple hues.\n- choice OF purple symbolizes justice, dignity, AND achievement FOR women.\n- anaya\'s artwork reflects past struggles, achievements, and future inclusion possibilities.',
                        '2024-03-01 13:00:00',
                        'https://kalkinemedia.com/storage/uploads/thumbnail/1709320396_65e228cc8e2f7_20384532_susana_anaya_infinite_layers_o_2000x2000.jpeg',
                        'kalkinemedia',
                        'https://kalkinemedia.com/au',
                        'https://i.bytvi.com/domain_icons/kalkinemedia.png',
                        'australia',
                        'top',
                        'english'
            )
            ,
            (
                        9,
                        'Dean R. LeBoeuf Recognized For 25 Years of AV Preeminent Martindale-Hubbell Rating',
                        'https://kalkinemedia.com/news/world-news/dean-r-leboeuf-recognized-for-25-years-of-av-preeminent-martindale-hubbell-rating',
                        'info@kalkinemedia.com (EIN Presswire)',
                        '- Content for personal, non-commercial use to educate and inform.\n- Not a recommendation for financial decisions, sponsored/non-sponsored stocks.\n- Kalkine Media not licensed to provide investment advice, seek professional advice.\n- Disclaims liability for any damages from use of content.\n- Images/music credited to respective owners, used for educational purposes.\n\nLet your financial decisions dance to a professional tune! If it\'s NOT yours, don\'t own it!',
                        '2024-03-01 13:00:00',
                        NULL,
                        'kalkinemedia',
                        'https://kalkinemedia.com/au',
                        'https://i.bytvi.com/domain_icons/kalkinemedia.png',
                        'australia',
                        'top',
                        'english'
            )
            ,
            (
                        10,
                        'Ascendant Detox - NYC Presents Comprehensive Treatment Approach for Marijuana Addiction',
                        'https://kalkinemedia.com/news/world-news/ascendant-detox-nyc-presents-comprehensive-treatment-approach-for-marijuana-addiction',
                        'info@kalkinemedia.com (EIN Presswire)',
                        '- Ascendant Detox - NYC offers enhanced marijuana addiction treatment program.\n- Located in Midtown Manhattan, it provides personalized care and innovative therapies.\n- Utilizes evidence-based and holistic approaches for lasting recovery.\n- Tailored program includes CBT, art therapy, family therapy, and relapse prevention.\n- Emphasizes comprehensive treatment, addressing emotional and psychological factors of addiction.',
                        '2024-03-01 13:00:00',
                        'https://kalkinemedia.com/storage/uploads/thumbnail/1709321122_65e22ba2b536d_19336934_ascendant_detox_nyc_500x500.jpeg',
                        'kalkinemedia',
                        'https://kalkinemedia.com/au',
                        'https://i.bytvi.com/domain_icons/kalkinemedia.png',
                        'australia',
                        'top',
                        'english'
            )
            ,
            (
                        11,
                        'Synthesia: Transform your text into engaging AI videos effortlessly',
                        'https://news.knowledia.com/AU/en/articles/synthesia-transform-your-text-into-engaging-ai-videos-effortlessly-e85bb20a509cbce8e9e70893aa75d889d4e1eaf8?source=rss',
                        '',
                        '- Synthesia: AI platform for creating engaging videos with 120+ languages.\n- Users can transform text into videos with natural-sounding AI voices.\n- Ideal for teams creating training videos at scale.\n- Offers seamless editing process without the need for prior experience.\n- Streamlines video creation with AI avatars, voiceovers, and integrations.',
                        '2024-03-02 13:35:03',
                        'https://backend.dynamicbusiness.com/wp-content/uploads/2024/02/Synthesia.jpg',
                        'knowledia',
                        'http://news.knowledia.com',
                        'https://i.bytvi.com/domain_icons/knowledia.png',
                        'australia',
                        'top',
                        'english'
            )
            ,
            (
                        12,
                        'NoCodeApi: Connect with APIs effortlessly, without any coding',
                        'https://news.knowledia.com/AU/en/articles/nocodeapi-connect-with-apis-effortlessly-without-any-coding-ce327d2163ea42eaf5dd9b710d34b33e244ec7a4?source=rss',
                        '',
                        '- NoCodeApi connects with over 40 apps without coding hassle.\n- Users can integrate data from various apps effortlessly.\n- Simplistic and secure with encrypted data on cloud servers.\n- Built on serverless architecture for fast API calls.\n- Saves time and money by eliminating the need for coding.',
                        '2024-03-02 13:35:03',
                        'https://backend.dynamicbusiness.com/wp-content/uploads/2024/02/NoCodeApi.jpg',
                        'knowledia',
                        'http://news.knowledia.com',
                        'https://i.bytvi.com/domain_icons/knowledia.png',
                        'australia',
                        'top',
                        'english'
            )
            ,
            (
                        13,
                        'Diabetic Nephropathy Market to Hit USD 3.50 Billion By 2030',
                        'https://kalkinemedia.com/news/world-news/diabetic-nephropathy-market-to-hit-usd-350-billion-by-2030',
                        'info@kalkinemedia.com (EIN Presswire)',
                        '- Diabetic Nephropathy market valued at USD 2.20 billion in 2022\n- Projected compound annual growth rate of 6% by 2030\n- Disease progression involves stages from glomerular hyperfiltration to ESRD\n- Major key players in the market include Eli Lilly and Sanofi\n- Market driven by escalating diabetes prevalence and aging population, offering growth opportunities.',
                        '2024-03-02 13:28:16',
                        'https://kalkinemedia.com/storage/uploads/thumbnail/1709408206_65e37fce9c9d0_20396201_diabetic_nephropathy_market_1200x628.jpeg',
                        'kalkinemedia',
                        'https://kalkinemedia.com/au',
                        'https://i.bytvi.com/domain_icons/kalkinemedia.png',
                        'australia',
                        'top',
                        'english'
            )
            ,
            (
                        14,
                        'The scourge of problem gambling',
                        'https://www.spectator.com.au/2024/03/the-scourge-of-problem-gambling/',
                        'Mark Powell',
                        '- 47% of Tasmanians gamble, causing community concern in Australia.\n- Anglican Church of Tasmania presented research on gambling\'s impact.\n- punting ON horses IS a popular yet problematic activity.\n- gambling becoming a major community issue IN tasmania AND australia.\n- church report highlights the sobering impact OF gambling habits.',                         '2024-03-02 13:26:48',                         'HTTPS://www.spectator.com.au/wp-content/uploads/2024/03/pexels-darya-sannikova-3021120.jpg',                         'spectator_au',                         'HTTPS://www.spectator.com.au',                         'HTTPS://i.bytvi.com/domain_icons/spectator_au.png',                         'australia',                         'TOP',                         'english'             )             ,             (                         15,                         'best xbox fightingGAMES: punch AND kick your way TO victory',                         'HTTPS://www.trueachievements.com/news/best-xbox-fighting-games',                         '',                         '1. the best fighting games ON xbox AS OF march 2024.\n2. soul caliburVI: weapon-wielding action WITH the witcher crossover content.\n3. dragon ball xenoverse 2: one-stop shop FOR skill-based fighting.\n4. killerINSTINCT: includes crossover characters FROM other first-party games.\n5. tekken 8: newbie-friendly features AND robust character creator.',                         '2024-03-02 13:29:38',                         'HTTPS://www.trueachievements.com/customimages/carousel/146758.jpg',                         'trueachievements',                         'HTTPS://www.trueachievements.com',                         'HTTPS://i.bytvi.com/domain_icons/trueachievements.png',                         'canada',                         'technology',                         'english'             )             ,             (                         16,                         '2024 genesis g70 shooting brake review',                         'HTTPS://www.armidaleexpress.com.au/story/8542191/2024-genesis-g70-shooting-brake-review/?src=rss',                         'james wong',                         '- rear-wheel drive, unlikely TO lose control WHEN accelerating\n- limited-slip rear differential AND michelin pilot sport tyres\n- more enjoyable TO drive than v6, less intimidating power\n- confidence-inspiring handling, safe AND fun\n- control AND traction make FOR a playful driving experience',                         '2024-03-02 13:01:00',                         'HTTPS://www.armidaleexpress.com.au/images/transform/v1/crop/frm/silverstone-feed-data/d66276ba-4087-4f21-9670-55b7612943e6.jpg/r3_0_3944_2220_w600_h338_fmax.jpg',                         'armidaleexpress',                         'HTTPS://www.armidaleexpress.com.au',                         NULL,                         'australia',                         'technology',                         'english'             )             ,             (                         17,                         '2024 genesis g70 shooting brake review',                         'HTTPS://www.bluemountainsgazette.com.au/story/8542191/2024-genesis-g70-shooting-brake-review/?src=rss',                         'james wong',                         '- rear-wheel drive feels stable AND controlled, thanks TO tech features.\n- michelin pilot sport tires provide excellent grip AND traction.\n- limited-slip rear differential enhances stability AND handling.\n- offers more fun than the v6 without overpowering the driver.\n- allows confident acceleration without fear OF losing control.',                         '2024-03-02 13:01:00',                         'HTTPS://www.bluemountainsgazette.com.au/images/transform/v1/crop/frm/silverstone-feed-data/d66276ba-4087-4f21-9670-55b7612943e6.jpg/r3_0_3944_2220_w600_h338_fmax.jpg',                         'bluemountainsgazette',                         'HTTPS://www.bluemountainsgazette.com.au',                         NULL,                         'australia',                         'technology',                         'english'             )             ,             (                         18,                         '2024 genesis g70 shooting brake review',                         'HTTPS://www.margaretrivermail.com.au/story/8542191/2024-genesis-g70-shooting-brake-review/?src=rss',                         'james wong',                         '- rear-wheel drive WITH limited-slip rear differential feels stable.\n- sticky michelin pilot sport tires allow FOR more fun driving.\n- less fear OF overpowering compared TO v6 engine.\n- rarely feels out OF shape, even WITH early acceleration.\n- enjoyable AND controlled driving experience.',                         '2024-03-02 13:01:00',                         'HTTPS://www.margaretrivermail.com.au/images/transform/v1/crop/frm/silverstone-feed-data/d66276ba-4087-4f21-9670-55b7612943e6.jpg/r3_0_3944_2220_w600_h338_fmax.jpg',                         'margaretrivermail',                         'HTTPS://www.margaretrivermail.com.au',                         NULL,                         'australia',                         'technology',                         'english'             )             ,             (                         19,                         'best xbox fightingGAMES: punch AND kick your way TO victory',                         'HTTPS://www.trueachievements.com/news/best-xbox-fighting-games',                         '',                         '- soul caliburVI: weapon-wielding action WITH large character roster AND crossover content.\n\n- dragon ball xenoverse 2: skill-based fighting IN conton city WITH OVER 40 dlc characters.\n\n- narutoSHIPPUDEN: ultimate ninja storm 4: colorful ninja adventure WITH versus mode AND nostalgic teams.\n\n- killerINSTINCT: first-party fighter WITH freeUPDATE and crossover characters.\n\n- injustice 2: dc superhero battles WITH massive character roster AND character customization.',                         '2024-03-02 13:29:38',                         'HTTPS://www.trueachievements.com/customimages/carousel/146758.jpg',                         'trueachievements',                         'HTTPS://www.trueachievements.com',                         'HTTPS://i.bytvi.com/domain_icons/trueachievements.png',                         'canada',                         'technology',                         'english'             )             ,             (                         20,                         '2024 genesis g70 shooting brake review',                         'HTTPS://www.armidaleexpress.com.au/story/8542191/2024-genesis-g70-shooting-brake-review/?src=rss',                         'james wong',                         '- rear-wheel drive feels stable WITH limited-slip differential.\n- michelin pilot sport tires provide good grip AND stability.\n- more fun TO drive than v6, less fear OF overpowering.\n- limited-slip rear diff prevents early loss OF control.\n- stable handling AND grip make FOR a confident driving experience.',                         '2024-03-02 13:01:00',                         'HTTPS://www.armidaleexpress.com.au/images/transform/v1/crop/frm/silverstone-feed-data/d66276ba-4087-4f21-9670-55b7612943e6.jpg/r3_0_3944_2220_w600_h338_fmax.jpg',                         'armidaleexpress',                         'HTTPS://www.armidaleexpress.com.au',                         NULL,                         'australia',                         'technology',                         'english'             )             ,             (                         21,                         '2024 genesis g70 shooting brake review',                         'HTTPS://www.bluemountainsgazette.com.au/story/8542191/2024-genesis-g70-shooting-brake-review/?src=rss',                         'james wong',                         '- rwd rarely feels out OF control, limited-slip diff, sticky tires.\n- more fun than v6, won\'t overpower you, exhilarating drive.\n- Limited-slip differential and Michelin Pilot Sport tires provide stability.\n- Rear-wheel drive feels in control, fun to drive, stable handling.\n- Limited-slip diff and sticky tires ensure stability and control.',
                        '2024-03-02 13:01:00',
                        'https://www.bluemountainsgazette.com.au/images/transform/v1/crop/frm/silverstone-feed-data/d66276ba-4087-4f21-9670-55b7612943e6.jpg/r3_0_3944_2220_w600_h338_fmax.jpg',
                        'bluemountainsgazette',
                        'https://www.bluemountainsgazette.com.au',
                        NULL,
                        'australia',
                        'technology',
                        'english'
            )
            ,
            (
                        22,
                        '2024 Genesis G70 Shooting Brake review',
                        'https://www.margaretrivermail.com.au/story/8542191/2024-genesis-g70-shooting-brake-review/?src=rss',
                        'James Wong',
                        '- Rear-wheel drive feels stable and controlled\n- Limited-slip rear differential and sticky Michelin Pilot Sport tyres\n- More fun than V6, won\'t overpower you\n- feels secure even WHEN accelerating early\n- stable handling AND control, even WITH aggressive driving',                         '2024-03-02 13:01:00',                         'HTTPS://www.margaretrivermail.com.au/images/transform/v1/crop/frm/silverstone-feed-data/d66276ba-4087-4f21-9670-55b7612943e6.jpg/r3_0_3944_2220_w600_h338_fmax.jpg',                         'margaretrivermail',                         'HTTPS://www.margaretrivermail.com.au',                         NULL,                         'australia',                         'technology',                         'english'             )             ,             (                         23,                         '2024 genesis g70 shooting brake review',                         'HTTPS://www.blayneychronicle.com.au/story/8542191/2024-genesis-g70-shooting-brake-review/?src=rss',                         'james wong',                         '- rear-wheel drive feels stable, thanks TO limited-slip differential. \n- michelin pilot sport tires provide good grip AND control. \n- more fun TO drive than v6, less intimidating power. \n- handles well even WITH early acceleration. \n- stability AND control make FOR enjoyable driving experience.',                         '2024-03-02 13:01:00',                         'HTTPS://www.blayneychronicle.com.au/images/transform/v1/crop/frm/silverstone-feed-data/d66276ba-4087-4f21-9670-55b7612943e6.jpg/r3_0_3944_2220_w600_h338_fmax.jpg',                         'blayneychronicle',                         'HTTPS://www.blayneychronicle.com.au',                         NULL,                         'australia',                         'technology',                         'english'             )             ,             (                         24,                         'apple @WORK: need TO switch mdm providers? CHECK out maconboardingmate',                         'HTTPS://9to5mac.com/2024/03/02/apple-work-need-TO-switch-mdm-providers-CHECK-out-maconboardingmate/',                         'bradley chambers',                         '-MOSYLE: platform FOR seamless apple device deployment AND management.\n-MACONBOARDINGMATE: simplifies mdm setup AND switching FOR macos admins.\n- ease OFUSE: maconboardingmate offers launcher AND autolauncher modes.\n-COMPATIBILITY: compatible WITH multiple popular mdm solutions.\n-PRICING: options FOR diy OR turnkey implementation, support included.',                         '2024-03-02 11:00:00',                         'HTTPS://9to5mac.com/wp-content/uploads/sites/6/2024/01/apple-at-work-fi.png?w=1600',                         '9to5mac',                         'HTTPS://9to5mac.com',                         'HTTPS://i.bytvi.com/domain_icons/9to5mac.png',                         'united states OF america',                         'technology',                         'english'             )             ,             (                         25,                         'droneshield commences software defined radio development - australian defence magazine',                         'HTTPS://news.google.com/rss/articles/cbmiz2h0dhbzoi8vd3d3lmf1c3ryywxpyw5kzwzlbmnllmnvbs5hds9uzxdzl25ld3mvzhjvbmvzagllbgqty29tbwvuy2vzlxnvznr3yxjllwrlzmluzwqtcmfkaw8tzgv2zwxvcg1lbntsaqa?oc=5',                         '',                         '- droneshield developing custom software defined radios FOR future product capabilities\n- focus ON reducing hardware size, weight, powerWHILE maintaining computing ability\n- aiming FOR tactical deployment BY END users without referencing EXTERNAL systems\n- significant investment INTO next generation technologies, including custom radios\n- OVER 50% OF engineering team TO be involved IN the initiative',                         '2024-03-02 10:20:56',                         NULL,                         'google',                         'HTTPS://news.google.com',                         NULL,                         'australia',                         'technology',                         'english'             )             ,             (                         26,                         'xbox game pass loses three games IN march',                         'HTTPS://www.trueachievements.com/news/xbox-game-pass-leaving-soon-march-2024',                         '',                         '-HARDSPACE: shipbreaker, ni noKUNI: wrath OF the white witch remastered, AND shredders leaving game pass soon.\n- leaving ON march 15.\n-HARDSPACE: shipbreaker takes about 60 hours FOR FULL completion.\n- ni noKUNI: wrath OF the white witch remastered takes around 100 hours.\n- shredders IS a quick completion that takes less than ten hours.',                         '2024-03-02 09:32:29',                         'HTTPS://www.trueachievements.com/customimages/carousel/146909.jpg',                         'trueachievements',                         'HTTPS://www.trueachievements.com',                         'HTTPS://i.bytvi.com/domain_icons/trueachievements.png',                         'india',                         'technology',                         'english'             )             ,             (                         27,                         'POLL: which new xbox games will you be playing IN march?',                         'HTTPS://www.trueachievements.com/poll/56432/poll-which-new-xbox-games-will-you-be-playing-IN-march',                         '',                         '- register FOR free TO track gaming achievements AND STATISTICS.\n- manage game collection,SET scoring AND completion goals, track progress.\n- JOIN OVER 700,000 gaming sessions, unlock achievements, AND make friends.\n- fully secure AND mobile-friendly platform FOR gamers.\n- sign up now AND start charting your gaming journey!',                         '2024-03-02 08:59:42',                         'HTTPS://www.trueachievements.com/customimages/carousel/146892.jpg',                         'trueachievements',                         'HTTPS://www.trueachievements.com',                         'HTTPS://i.bytvi.com/domain_icons/trueachievements.png',                         'canada',                         'technology',                         'english'             )             ,             (                         28,                         'new west foods boss damon venoutsos reveals why customers pay more at grocery store checkouts',                         'HTTPS://thewest.com.au/lifestyle/food/new-west-foods-boss-damon-venoutsos-reveals-why-customers-pay-more-at-grocery-store-checkouts-c-13778473',                         'josh zimmerman',                         '- damon venoutsos criticizes lack OF supermarket competition FOR high prices.\n- supply chain disruptions AND extreme weather caused price spikes.\n- retailers are slow TO pass ON falls IN wholesale costs.\n- new west foods md navigates challenges IN food distribution industry.\n- covid-19 brings about labor shortages AND price fluctuations.',                         '2024-03-02 13:07:49',                         'HTTPS://images.thewest.com.au/publication/c-13778473/73c98fa5c64d7c938aab8f791be64ab7ad26d838-16x9-x1y0w2446h1376.jpg',                         'thewest',                         'HTTPS://thewest.com.au',                         'HTTPS://i.bytvi.com/domain_icons/thewest.png',                         'australia',                         'business',                         'english'             )             ,             (                         29,                         'airlines avelo AND breeze, three years after their pandemic debut, prepare FOR a profitable year',                         'HTTPS://www.cnbc.com/2024/03/02/upstart-airlines-avelo-breeze-prepare-FOR-profitable-year.html',                         '',                         '1. avelo AND breeze, small carriers, have rapidly grown amid pandemic.\n2. they focus ON less competitive routes AND offer low-cost travel.\n3. avelo flew 2.3m customers, aims FOR profit IN 2024.\n4. breeze aims FOR first profitable year IN 2024 AS well.\n5. both airlines face challenges LIKE pilot shortages AND high costs.',                         '2024-03-02 13:00:01',                         'HTTPS://image.cnbcfm.com/api/v1/image/106875328-1619638052669-avelo.jpg?v=1709331207&w=1920&h=1080',                         'cnbc',                         'HTTP://cnbc.com',                         NULL,                         'australia',                         'business',                         'english'             )             ,             (                         30,                         'detailed first impressions OF tesla’s refreshed model 3 (highland)',                         'HTTPS://techau.com.au/detailed-first-impressions-OF-teslas-refreshed-model-3-highland/',                         'jason cartwright',                         '- model 3 refresh includes significant changes LIKE stalkless steering wheel.\n- smart shift technology automatically selects gear based ON environment.\n- high-fidelity park assist uses 3d visualization FOR accurate parking guidance.\n- smart shift simplifies start-up process compared TO legacy ice cars.\n- tesla\'s ability to render virtual space accurately is impressive.',
                        '2024-03-02 11:03:24',
                        'https://techau.com.au/wp-content/uploads/2024/03/techAU-FeatureM3R-Detailed-first-impressions-1024x576.jpg',
                        'techau',
                        'https://techau.com.au',
                        'https://i.bytvi.com/domain_icons/techau.png',
                        'australia',
                        'business',
                        'english'
            )
            ,
            (
                        31,
                        'House That! Pro MMA fighter Jack Della Maddalena purchases Leeming home ahead of Miami fight',
                        'https://www.perthnow.com.au/business/property/house-that-pro-mma-fighter-jack-della-maddalena-purchases-leeming-home-ahead-of-miami-fight-c-13805330',
                        'Kim Macdonald',
                        '- Pro MMA fighter Jack Della Maddalena achieves homeownership win.\n- Purchases three-bedroom, two-bathroom home in Leeming for $560,000.\n- Known for fighting in glamorous places, but occasionally shares home life.\n- Rises to UFC fame, set to fight World No.4 Gilbert Burns.\n- Despite falling first home buyers, Della Maddalena and wife succeed.',
                        '2024-03-02 10:54:30',
                        'https://images.perthnow.com.au/publication/C-13805330/6e74d2cc9cd17ca11f7c12979ac6e93327f6a596-16x9-x1y0w2446h1376.jpg',
                        'perthnow',
                        'https://www.perthnow.com.au',
                        'https://i.bytvi.com/domain_icons/perthnow.png',
                        'australia',
                        'business',
                        'english'
            )
            ,
            (
                        32,
                        'Buy Buy Home: The Perth houses for sale you must know about in Bicton, Sorrento and Coolbellup',
                        'https://thewest.com.au/business/property/buy-buy-home-the-perth-houses-for-sale-you-must-know-about-in-bicton-sorrento-and-coolbellup-c-13764928',
                        'Raquel de Brito',
                        '- Join Leadership Matters breakfast for exclusive insights on Peter Dutton\n- Discover more about Peter Dutton in an intimate setting\n- Secure your spot for an insightful breakfast experience\n- Gain firsthand knowledge about Peter Dutton at Leadership Matters event\n- Don\'t miss out ON this opportunity TO get TO know dutton',                         '2024-03-02 07:12:15',                         'HTTPS://images.thewest.com.au/publication/c-13764928/d302e514a6d1eefb08b5e53bd2ce1da89d9561fe-16x9-x0y107w2048h1152.jpg',                         'thewest',                         'HTTPS://thewest.com.au',                         'HTTPS://i.bytvi.com/domain_icons/thewest.png',                         'australia',                         'business',                         'english'             )             ,             (                         33,                         'broken moon lander beams back a final poignant photo — OF earth',                         'HTTPS://sea.mashable.com/space/31504/broken-moon-lander-beams-back-a-final-poignant-photo-OF-earth',                         'mark kaufman',                         '- odysseus moon lander lost power, sent farewell transmission WITH earth\n- may revive IN mid-march but risks FROM freezing temps\n- nasa celebrates mission success AND collaboration WITH commercial companies\n- aims TO pave way FOR future lunar exploration WITH potential moon bases\n- south pole\'s water ice reserves could support extended missions.',
                        '2024-03-02 11:00:00',
                        'https://sm.mashable.com/mashable_sea/article/b/broken-moo/broken-moon-lander-beams-back-a-final-poignant-photo-of-eart_fyk2.jpg',
                        'mashable',
                        'https://sea.mashable.com',
                        'https://i.bytvi.com/domain_icons/mashable.png',
                        'india',
                        'science',
                        'english'
            )
            ,
            (
                        34,
                        'Space Accident Means Tardigrades May Have Contaminated The Moon - ScienceAlert',
                        'https://news.google.com/rss/articles/CBMiXGh0dHBzOi8vd3d3LnNjaWVuY2VhbGVydC5jb20vc3BhY2UtYWNjaWRlbnQtbWVhbnMtdGFyZGlncmFkZXMtbWF5LWhhdmUtY29udGFtaW5hdGVkLXRoZS1tb29u0gEA?oc=5',
                        '',
                        '- Beresheet, a space probe, attempted the first private Moon landing.\n- The probe carried tardigrades, known for surviving in extreme conditions.\n- Technical failures during the landing resulted in the probe\'s destruction.\n- tardigrades\' ability to survive extreme conditions raises ethical and scientific questions.\n- Tardigrades on the Moon cannot survive and colonize due to lack of resources.',
                        '2024-03-02 10:31:11',
                        NULL,
                        'google',
                        'https://news.google.com',
                        NULL,
                        'australia',
                        'science',
                        'english'
            )
            ,
            (
                        35,
                        'Scientists zoom in on distant solar system. It\'s teeming WITH water.',                         'HTTPS://sea.mashable.com/space/31503/scientists-zoom-IN-ON-distant-solar-system-its-teeming-WITH-water',                         'mark kaufman',                         '- alma observatory finds massive water volumes around young developing solar system\n- star hl tauri has at least three times earth\'s oceans in water\n- Visible gap in inner disk suggests planet formation, where water is\n- Image shows water molecules in blue and dust rings in red\n- Possibility of a water world forming around star HL Tauri',
                        '2024-03-02 10:30:00',
                        'https://sm.mashable.com/mashable_sea/article/s/scientists/scientists-zoom-in-on-distant-solar-system-its-teeming-with_6hv3.jpg',
                        'mashable',
                        'https://sea.mashable.com',
                        'https://i.bytvi.com/domain_icons/mashable.png',
                        'united kingdom',
                        'science',
                        'english'
            )
            ,
            (
                        36,
                        'Jaw-dropping Webb photo reveals how the universe turned its lights on - Mashable',
                        'https://news.google.com/rss/articles/CBMiSWh0dHBzOi8vbWFzaGFibGUuY29tL2FydGljbGUvamFtZXMtd2ViYi1zcGFjZS10ZWxlc2NvcGUtZ2FsYXhpZXMtdW5pdmVyc2XSAQA?oc=5',
                        '',
                        '- Dark Ages, when thick gases concealed light, was overcome. \n- Webb telescope reveals faint, ancient galaxies producing ultraviolet light. \n- This ultraviolet light broke down dense clouds in space. \n- Cosmic powerhouses of small galaxies transformed the universe. \n- Webb\'s powerfulABILITIES: giant mirror, infrared VIEW, studying exoplanets.',                         '2024-03-02 10:00:00',                         NULL,                         'google',                         'HTTPS://news.google.com',                         NULL,                         'australia',                         'science',                         'english'             )             ,             (                         37,                         'jaw-dropping webb photo reveals how the universe turned its lights ON',                         'HTTPS://sea.mashable.com/space/31501/jaw-dropping-webb-photo-reveals-how-the-universe-turned-its-lights-ON',                         'mark kaufman',                         '- ancient universe dark, thick gas hides starlight, reveals BY webb telescope.\n- pandora\'s Cluster acts as gravitational lens, magnifying ancient galaxies.\n- Ultraviolet light from tiny galaxies breaks down dense space gas.\n- Webb telescope\'s giant mirror captures light FROM ancient stars.\n- webb telescope\'s infrared view reveals distant exoplanets and ancient galaxies.',
                        '2024-03-02 10:00:00',
                        'https://sm.mashable.com/mashable_sea/article/j/jaw-droppi/jaw-dropping-webb-photo-reveals-how-the-universe-turned-its_c8jq.jpg',
                        'mashable',
                        'https://sea.mashable.com',
                        'https://i.bytvi.com/domain_icons/mashable.png',
                        'united kingdom',
                        'science',
                        'english'
            )
            ,
            (
                        38,
                        'Video show sharks, dolphins maul prawn trawler catch of Bundaberg fisher - ABC News',
                        'https://news.google.com/rss/articles/CBMiX2h0dHBzOi8vd3d3LmFiYy5uZXQuYXUvbmV3cy8yMDI0LTAzLTAyL3ZpZGVvLXNoYXJrcy1kb2xwaGlucy1tYXVsLXByYXduLXRyYXdsZXItY2F0Y2gvMTAzNTM0MjUy0gEoaHR0cHM6Ly9hbXAuYWJjLm5ldC5hdS9hcnRpY2xlLzEwMzUzNDI1Mg?oc=5',
                        '',
                        '- Sharks attacking fishing trawlers, leaving fishers with empty pockets.\n- East coast fishers upset about sharks taking their catch from lines.\n- Ocean experts believe sharks have learned to associate boats with food.\n- Footage shows hundreds of sharks and dolphins attacking prawn trawler\'s catch.\n- warmer waters may be driving more tropical sharks INTO coastal areas.',                         '2024-03-02 00:01:40',                         NULL,                         'google',                         'HTTPS://news.google.com',                         NULL,                         'australia',                         'science',                         'english'             )             ,             (                         39,                         'epic feeding frenzy caught ON camera AS sharks maul trawler catch',                         'HTTPS://www.abc.net.au/news/2024-03-02/video-sharks-dolphins-maul-prawn-trawler-catch/103534252',                         'elloise farrow-smith AND julie ray',                         '- sharks attack fishing trawlers, leave nets torn AND fishermen broke.\n- east coast fishers also face sharks raiding their catch lines.\n- experts say sharks learned boats mean free food FOR them.\n- footage shows sharks AND dolphins attacking prawn trawler\'s catch.\n- Warmer waters due to climate change may impact shark behavior.',
                        '2024-03-02 00:00:59',
                        NULL,
                        'abc_net',
                        'https://www.abc.net.au',
                        'https://i.bytvi.com/domain_icons/abc_net.png',
                        'australia',
                        'science',
                        'english'
            )
            ,
            (
                        40,
                        'Scientists Reveal Where Deadly Lightning Strikes Most in The US - ScienceAlert',
                        'https://news.google.com/rss/articles/CBMiXGh0dHBzOi8vd3d3LnNjaWVuY2VhbGVydC5jb20vc2NpZW50aXN0cy1yZXZlYWwtd2hlcmUtZGVhZGx5LWxpZ2h0bmluZy1zdHJpa2VzLW1vc3QtaW4tdGhlLXVz0gEA?oc=5',
                        '',
                        '- Lightning is like a giant electrical spark in the sky.\n- It is hotter and more powerful than most people realize.\n- Lightning causes significant damage and poses danger to people.\n- The US has an average of 23.4 million lightning flashes annually.\n- Better understanding of lightning helps improve safety and protection measures.',
                        '2024-03-01 23:33:12',
                        NULL,
                        'google',
                        'https://news.google.com',
                        NULL,
                        'australia',
                        'science',
                        'english'
            )
            ,
            (
                        41,
                        'New parasite threat detected in NSW bees as the industry continues to deal with varroa mite',
                        'https://www.abc.net.au/news/rural/2024-03-02/braula-fly-threat-for-nsw-beekeeping-industry/103525712',
                        'Kim Honan and Lara Webster',
                        '1. Bee parasite braula fly found near Tamworth, NSW apiary.\n2. Fly resembles varroa mite, less destructive, has six legs.\n3. NSW government will not attempt to eradicate the pest.\n4. Braula fly affects honeycomb quality; DPI has prevention strategies.\n5. Beekeepers concerned about biosecurity and response speed.',
                        '2024-03-01 22:22:13',
                        NULL,
                        'abc_net',
                        'https://www.abc.net.au',
                        'https://i.bytvi.com/domain_icons/abc_net.png',
                        'australia',
                        'science',
                        'english'
            );

/*!40000 ALTER TABLE `news_feed` ENABLE KEYS */
;UNLOCK tables;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;
-- Dump completed on 2024-03-03 12:43:23