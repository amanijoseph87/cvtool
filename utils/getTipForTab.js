/**
 * Returns the tip text for a specific tab
 * @param {string} tab - The tab name
 * @returns {string} The tip text
 */
export function getTipForTab(tab) {
  switch (tab) {
    case "contact":
      return "Jaza taarifa zako za mawasiliano kwenye CV yako. Ongeza jina, barua pepe, namba ya simu na mitandao ya kijamii.";
    case "summary":
      return "Andika muhtasari wa CV yako unaovutia waajiri. Eleza ujuzi na uzoefu wako kwa ufupi.";
    case "education":
      return "Ongeza taarifa za elimu yako kwenye CV. Weka vyuo, shahada, na mafanikio yako ya kitaaluma.";
    case "experience":
      return "Ongeza uzoefu wako wa kazi kwenye CV. Eleza majukumu na mafanikio yako katika kazi za awali.";
    case "projects":
      return "Ongeza miradi uliyofanya kwenye CV yako. Onesha ujuzi wako wa kiufundi na ubunifu.";
    case "skills":
      return "Orodhesha ujuzi wako muhimu kwenye CV. Ongeza ujuzi wa kiufundi na kibinadamu unaokufanya uwe mwajiriwa bora.";
    case "certificates":
      return "Ongeza vyeti na mafunzo uliyopata kwenye CV yako. Onesha ujuzi wako uliothibitishwa.";
    case "languages":
      return "Ongeza lugha unazozungumza kwenye CV yako. Eleza kiwango chako cha ufasaha katika kila lugha.";
    case "references":
      return "Ongeza watu wanaoweza kutoa ushahidi wa kazi yako kwenye CV. Weka mawasiliano ya wasimamizi au wenzako wa zamani.";
    default:
      return "Tengeneza CV bora na ya kitaalamu kwa kutumia Zoom Tanzania CV Resume maker. Tumia zana yetu bure kutengeneza CV inayovutia waajiri.";
  }
}
