-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 02, 2024 at 08:25 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `unihack2024`
--

-- --------------------------------------------------------

--
-- Table structure for table `news_feed`
--

DROP TABLE IF EXISTS `news_feed`;
CREATE TABLE IF NOT EXISTS `news_feed` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `summarised_text` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date` datetime NOT NULL,
  `image_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `source_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `source_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `source_icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `country` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `language` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news_feed`
--

INSERT INTO `news_feed` (`id`, `title`, `link`, `author`, `summarised_text`, `date`, `image_url`, `source_id`, `source_url`, `source_icon`, `country`, `category`, `language`) VALUES
(1, 'Bikie Head Seeks Early Jail Release After Almost Dying', 'https://www.theepochtimes.com/world/bikie-head-seeks-early-jail-release-after-almost-dying-5598270', 'AAP', '- Tarek Zahed: shot, arrested, spent 18 months in solitary confinement.\n- Medical experts: removed his eye, inserted metal plates and rods.\n- Charges dropped: pleaded guilty to hindering discovery of evidence.\n- Overseeing evidence destruction: sentenced soon for 2014 gang shooting.\n- Barrister argues for leniency: citing Zahed\'s health issues and loyalty.', '2024-03-01 13:00:58', 'https://img.theepochtimes.com/assets/uploads/2023/07/16/id5401653-GettyImages-481282608-700x420.jpg', 'theepochtimes', 'https://www.theepochtimes.com', 'https://i.bytvi.com/domain_icons/theepochtimes.png', 'australia', 'top', 'english'),
(2, '‘Not the Same’: Cyclone Leaves Dirty Water, $150 Million Fix', 'https://www.theepochtimes.com/world/not-the-same-cyclone-leaves-dirty-water-150-million-fix-5598269', 'AAP', '- Tropical Cyclone Jasper triggers landslides, affecting flood-hit community’s water.\n- Douglas Shire region faces $150 million problem from cyclone impact.\n- Massive landslides threaten roads and tourist industry in far north Queensland.\n- Water supply compromised by landslides, filtration plants need urgent replacement.\n- Long-term solutions needed for water and road problems; funding uncertain.', '2024-03-01 13:00:54', 'https://img.theepochtimes.com/assets/uploads/2023/12/22/id5552041-Cyclone-Jasper-Agriculture-1080x720.jpeg', 'theepochtimes', 'https://www.theepochtimes.com', 'https://i.bytvi.com/domain_icons/theepochtimes.png', 'australia', 'top', 'english'),
(3, 'Data Roaming During Disasters Not for Widespread Use', 'https://www.theepochtimes.com/world/data-roaming-during-disasters-not-for-widespread-use-5598271', 'AAP', '- Mobile customers may need disaster roaming during widespread natural disasters.\n- Telstra is testing temporary disaster roaming, but it\'s limited to small areas.\n- Lisa McTiernan says it won\'t work for significant events.\n- TPG\'s Alexander Osborne mentions the high cost of disaster roaming.\n- Bureau of Meteorology advises against using \"one-in-100-year events.\"', '2024-03-01 13:00:50', 'https://img.theepochtimes.com/assets/uploads/2022/11/11/GettyImages-695772548-700x420.jpg', 'theepochtimes', 'https://www.theepochtimes.com', 'https://i.bytvi.com/domain_icons/theepochtimes.png', 'australia', 'top', 'english'),
(4, 'Queensland Man Murdered Wife After Having ‘A Gutful’', 'https://www.theepochtimes.com/world/queensland-man-murdered-wife-after-having-a-gutful-5598268', 'AAP', '- Richard Kelsey refused wife\'s divorce request, killed her instead.\n- Recorded wife venting, shot her at close range with rifle.\n- Showed no concern, transferred money and called emergency services.\n- Sentenced to life in prison for murder by Justice Lincoln Crowley.\n- Kelsey\'s selfish and angry actions resulted in wife\'s tragic death.', '2024-03-01 13:00:42', 'https://img.theepochtimes.com/assets/uploads/2023/07/16/id5401651-GettyImages-1259113894-700x420.jpg', 'theepochtimes', 'https://www.theepochtimes.com', 'https://i.bytvi.com/domain_icons/theepochtimes.png', 'australia', 'top', 'english'),
(5, 'New flights to Europe as one of the world’s most-awarded airlines arrives', 'https://www.theage.com.au/traveller/travel-news/new-flights-to-europe-as-one-of-the-world-s-most-awarded-airlines-arrives-20240223-p5f791.html?ref=rss&utm_medium=rss&utm_source=rss_feed', 'Julietta Jameson', '- Turkish Airlines introduces Melbourne to Istanbul direct flight, marking 346th destination.\n- Skytrax\'s eight-time best European airline now operates in 130 countries.\n- The airline plans 21 weekly flights between Melbourne, Brisbane, Perth, and Sydney.\n- Turkish Airlines plans to increase flights to 35 by 2025.\n- Boeing 787-9 Dreamliner and Airbus A350-900 to operate the route.', '2024-03-01 13:00:00', 'https://static.ffx.io/images/$zoom_0.2347%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_53/t_crop_custom/q_86%2Cf_jpg/aad56d6cd312dac2bacdd0b46c13d617f710272e', 'theage', 'https://www.theage.com.au', 'https://i.bytvi.com/domain_icons/theage.png', 'australia', 'top', 'english'),
(6, 'Green Technology and Sustainability Market Prospers Fueled by Environmental Consciousness and Regulatory Initiatives', 'https://kalkinemedia.com/news/world-news/green-technology-and-sustainability-market-prospers-fueled-by-environmental-consciousness-and-regulatory-initiatives', 'info@kalkinemedia.com (EIN Presswire)', '- Green Technology and Sustainability Market encompasses applications in green building.\n- Market\'s potential for rapid growth pronounced in developing economies and emerging markets.\n- Increased international and domestic Venture Capital investments essential for market capture.\n- Rising global awareness of environmental issues and concerns driving market growth.\n- Green data centers and green cloud computing pivotal in market expansion.', '2024-03-01 13:00:00', 'https://kalkinemedia.com/storage/uploads/thumbnail/1709320399_65e228cfb3e03_green_technology_and_sustainabi.jpeg', 'kalkinemedia', 'https://kalkinemedia.com/au', 'https://i.bytvi.com/domain_icons/kalkinemedia.png', 'australia', 'top', 'english'),
(7, 'New flights to Europe as one of the world’s most-awarded airlines arrives', 'https://www.brisbanetimes.com.au/traveller/travel-news/new-flights-to-europe-as-one-of-the-world-s-most-awarded-airlines-arrives-20240223-p5f791.html?ref=rss&utm_medium=rss&utm_source=rss_feed', 'Julietta Jameson', '- Turkish Airlines arrives in Australia, offering direct Istanbul-Melbourne route.\n- Skytrax\'s best airline in Europe, expanding to 130th country.\n- Commences 3x weekly Melbourne-Istanbul service, increasing to 21 flights.\n- Plans to increase flights to 35 by 2025, serving major Australian cities.\n- Utilizes Boeing 787-9 Dreamliner and Airbus A350-900 for different seasons.', '2024-03-01 13:00:00', 'https://static.ffx.io/images/$zoom_0.2347%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_53/t_crop_custom/q_86%2Cf_jpg/aad56d6cd312dac2bacdd0b46c13d617f710272e', 'brisbanetimes', 'https://www.brisbanetimes.com.au', 'https://i.bytvi.com/domain_icons/brisbanetimes.png', 'australia', 'top', 'english'),
(8, 'Mexican Artist Susana Anaya Inspires Inclusion for International Women’s Day 2024', 'https://kalkinemedia.com/news/world-news/mexican-artist-susana-anaya-inspires-inclusion-for-international-womens-day-2024', 'info@kalkinemedia.com (EIN Presswire)', '- Susana Anaya launches \'Infinite Layers of Inclusion\' inspired by IWD 2024.\n- Artwork displayed at Elizabeth Arthotel in Austria.\n- Anaya\'s artwork weaves intricate layers with 4 distinct purple hues.\n- Choice of purple symbolizes justice, dignity, and achievement for women.\n- Anaya\'s artwork reflects past struggles, achievements, and future inclusion possibilities.', '2024-03-01 13:00:00', 'https://kalkinemedia.com/storage/uploads/thumbnail/1709320396_65e228cc8e2f7_20384532_susana_anaya_infinite_layers_o_2000x2000.jpeg', 'kalkinemedia', 'https://kalkinemedia.com/au', 'https://i.bytvi.com/domain_icons/kalkinemedia.png', 'australia', 'top', 'english'),
(9, 'Dean R. LeBoeuf Recognized For 25 Years of AV Preeminent Martindale-Hubbell Rating', 'https://kalkinemedia.com/news/world-news/dean-r-leboeuf-recognized-for-25-years-of-av-preeminent-martindale-hubbell-rating', 'info@kalkinemedia.com (EIN Presswire)', '- Content for personal, non-commercial use to educate and inform.\n- Not a recommendation for financial decisions, sponsored/non-sponsored stocks.\n- Kalkine Media not licensed to provide investment advice, seek professional advice.\n- Disclaims liability for any damages from use of content.\n- Images/music credited to respective owners, used for educational purposes.\n\nLet your financial decisions dance to a professional tune! If it\'s not yours, don\'t own it!', '2024-03-01 13:00:00', NULL, 'kalkinemedia', 'https://kalkinemedia.com/au', 'https://i.bytvi.com/domain_icons/kalkinemedia.png', 'australia', 'top', 'english'),
(10, 'Ascendant Detox - NYC Presents Comprehensive Treatment Approach for Marijuana Addiction', 'https://kalkinemedia.com/news/world-news/ascendant-detox-nyc-presents-comprehensive-treatment-approach-for-marijuana-addiction', 'info@kalkinemedia.com (EIN Presswire)', '- Ascendant Detox - NYC offers enhanced marijuana addiction treatment program.\n- Located in Midtown Manhattan, it provides personalized care and innovative therapies.\n- Utilizes evidence-based and holistic approaches for lasting recovery.\n- Tailored program includes CBT, art therapy, family therapy, and relapse prevention.\n- Emphasizes comprehensive treatment, addressing emotional and psychological factors of addiction.', '2024-03-01 13:00:00', 'https://kalkinemedia.com/storage/uploads/thumbnail/1709321122_65e22ba2b536d_19336934_ascendant_detox_nyc_500x500.jpeg', 'kalkinemedia', 'https://kalkinemedia.com/au', 'https://i.bytvi.com/domain_icons/kalkinemedia.png', 'australia', 'top', 'english');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
