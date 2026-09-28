/**
 * OTHER ACTIVITIES & SOCIAL INITIATIVES DATA
 * Centralized configuration for extracurricular activities, volunteer leadership, and social initiatives.
 * 
 * Fields for each activity:
 * - id
 * - name (Activity name)
 * - organization
 * - description (leave empty if not available yet)
 * - date (leave empty if not available yet)
 * - certificateImage (e.g. "/certificates/nss.jpg")
 * - certificateLink (e.g. online link)
 * - badge
 */

export const activitiesData = [
  {
    id: "nss",
    name: "National Service Scheme (NSS)",
    organization: "National Service Scheme (NSS)",
    description: "", // Editable: add description when ready
    date: "", // Editable: add date when ready
    certificateImage: "/certificates/nss.jpeg", // Editable: paste certificate image path, e.g. "/certificates/nss.jpg"
    certificateLink: "", // Editable: paste certificate URL if hosted
    badge: "Community & Social Service"
  },
  {
    id: "helping-hands",
    name: "Helping Hands",
    organization: "Helping Hands",
    description: "", // Editable: add description when ready
    date: "", // Editable: add date when ready
    certificateImage: "/certificates/helping_hands.jpeg", // Editable: paste certificate image path, e.g. "/certificates/helping-hands.jpg"
    certificateLink: "", // Editable: paste certificate URL if hosted
    badge: "Social Welfare Initiative"
  }
];

export default activitiesData;
