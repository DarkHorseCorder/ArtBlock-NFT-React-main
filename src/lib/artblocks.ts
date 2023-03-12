import { IABCollection } from "../global";
import { ArtblocksCollectionsDocument, ArtblocksCollectionDocument, execute } from "../.graphclient";
import { getScriptType } from "./utils";

const mutateCollection = (collection: IABCollection) => {
  // Flatten properties
  collection.contractAddress = collection.contract?.id || null;
  collection.mintingDate = collection.minterConfiguration?.startTime || null;
  collection.scriptLength = collection.script?.length || null;

  // Parse numbers
  collection.activatedAt = parseInt(collection.activatedAt) || null;
  collection.completedAt = parseInt(collection.completedAt) || null;
  collection.invocations = parseInt(collection.invocations) || null;
  collection.maxInvocations = parseInt(collection.maxInvocations) || null;
  collection.projectId = parseInt(collection.projectId);
  collection.mintingDate = parseInt(collection.mintingDate) || null;
  collection.updatedAt = parseInt(collection.updatedAt) || null;

  // Get script type
  collection.scriptType = getScriptType(collection);
};

export const getABCollection = (id: string) => {
  return execute(ArtblocksCollectionDocument, { id }).then((result : any) => {
    let collection = result?.data.project as IABCollection;
    mutateCollection(collection);
    return collection;
  });
};

export const getABCollections = async (): Promise<Array<IABCollection>> => {
  let projects: Array<IABCollection> = [];
  return execute(ArtblocksCollectionsDocument, {})
    .then((result : any) => {
      projects = result?.data?.projects || [] as IABCollection[];
      projects.map((collection) => {
        mutateCollection(collection);
        collection.script = null;
        collection.description = null;
      });

      projects = projects.sort((a, b) => {
        const bDate = b.completedAt || b.mintingDate || b.activatedAt;
        const aDate = a.completedAt || a.mintingDate || a.activatedAt;
        return bDate - aDate;
      });
    })
    .then(() => {
      return projects;
    });
};
