from typing import Dict
import json
from bs4 import BeautifulSoup
import requests
from time import *
from random import randint

def article_detail_scrap(link: str, title: str) -> dict[str, str]:
    article = requests.get("https://tps.ca"+ link).text
    soup = BeautifulSoup(article, 'lxml')
    article_details = soup.find('div', class_='news-releases-article').text.replace('\n', ' ')
    return {title: article_details}


def scrap():
    main_dict = {}
    detailed_info_dict = {}
    root_website = "https://www.tps.ca/media-centre/news-releases/?q=&unit=&division=&category=&page="
    num_reports = 0
    for page in range(1, 16):
        news_page = requests.get(root_website + str(page)).text
        soup = BeautifulSoup(news_page, 'lxml')
        news_reports = soup.find_all('h5', class_='news-releases-title')
        for report in news_reports:
            link = report.a['href']
            description = report.a.text
            if (("Missing" not in description) and ("Public Advisory" not in description)
                    and ("Public Safety Alert" not in description) and ("LOCATED" not in description)
                    and (len(description.split('\r\n')) != 1) and ("Chief" not in description)):
                num_reports += 1
                description = description.replace("\r\n", ", ")
                description = description.replace(",,", ",")
                description = description.replace(", ,", ",")
                print(description)
                details = description.split(", ")
                event, location = details[0], details[1]
                if ("Collision" in event) or ("Fatal" in event):
                    report_article_dict = article_detail_scrap(link, description)
                    detailed_info_dict["Case " + f'{num_reports}'] = report_article_dict
                    collision_dict: Dict[str, str] = {"Public Order Crimes": "Collision/Vehicle Incident",
                                                      "Event": event, "location": location}
                    main_dict["Case " +  f'{num_reports}'] = collision_dict
                elif "Hate" in event:
                    report_article_dict = article_detail_scrap(link, description)
                    detailed_info_dict["Case " + f'{num_reports}'] = report_article_dict
                    hate_crime_dict: Dict[str, str] = {"Violent Crimes": "Hate Crime", "Event": event, "Location": location}
                    main_dict["Case " +  f'{num_reports}'] = hate_crime_dict
                elif ("Stabbing" in event) or ("Assault With a Weapon" in event):
                    report_article_dict = article_detail_scrap(link, description)
                    detailed_info_dict["Case " + f'{num_reports}'] = report_article_dict
                    weapon_dict: Dict[str, str] = {"Violent Crimes": "Assault with Weapons", "Event": event, "Location": location}
                    main_dict["Case " +  f'{num_reports}'] = weapon_dict
                elif ("Sexual" in event) or ("Pornography" in event):
                    if location != "Update":
                        report_article_dict = article_detail_scrap(link, description)
                        detailed_info_dict["Case " + f'{num_reports}'] = report_article_dict
                        sa_dict: Dict[str, str] = {"Violent Crimes": "Sexual Assault/Abuse", "Event": event, "Location": location}
                        main_dict["Case " +  f'{num_reports}'] = sa_dict
                elif ("Assault" in event) or ("Assaulting" in event) or ("Threatening" in event):
                    report_article_dict = article_detail_scrap(link, description)
                    detailed_info_dict["Case " + f'{num_reports}'] = report_article_dict
                    assault_dict: Dict[str, str] = {"Violent Crimes": "Assault", "Event": event, "Location": location}
                    main_dict["Case " +  f'{num_reports}'] = assault_dict
                elif ("Homicide" in event) or ("Murder" in event):
                    report_article_dict = article_detail_scrap(link, description)
                    detailed_info_dict["Case " + f'{num_reports}'] = report_article_dict
                    hom_dict: Dict[str, str] = {"Violent Crimes": "Homicide", "Event": event, "Location": location}
                    main_dict["Case " +  f'{num_reports}'] = hom_dict
                elif ("Carjacking" in event) or ("Robberies" in event) or ("Robbery" in event) or ("Theft" in event):
                    report_article_dict = article_detail_scrap(link, description)
                    detailed_info_dict["Case " + f'{num_reports}'] = report_article_dict
                    theft_dict: Dict[str, str] = {"Property Crimes": "Theft", "Event": event, "Location": location}
                    main_dict["Case " +  f'{num_reports}'] = theft_dict
                elif ("Break and Enter" in event) or ("Home Invasion" in event) or ("Damaging" in event):
                    report_article_dict = article_detail_scrap(link, description)
                    detailed_info_dict["Case " + f'{num_reports}'] = report_article_dict
                    break_dict: Dict[str, str] = {"Property Crimes": "Break and Enter", "Event": event, "Location": location}
                    main_dict["Case " + f'{num_reports}'] = break_dict

    with open("datasets.json", "w") as file:
        json.dump(main_dict, file, indent=4)

    with open("detailed_info.json", "w") as file:
        json.dump(detailed_info_dict, file, indent=4)


        sleep(randint(2, 5))


if __name__ == '__main__':
    scrap()