// @ts-ignore
import { aiData } from './ai.js'
// @ts-ignore
import { networkingData } from './networking.js'
// @ts-ignore
import { hackingData } from './hacking.js'
// @ts-ignore
import { softwareData } from './software.js'
// @ts-ignore
import { cryptoData } from './crypto.js'
// @ts-ignore
import { cloudData } from './cloud.js'
// @ts-ignore
import { mobileData } from './mobile.js'
// @ts-ignore
import { devsecData } from './devsec.js'
// @ts-ignore
import { selfdevData } from './selfdev.js'

import type { AreaData, AreaId } from './types'

export const allData: Record<AreaId, AreaData> = {
  ai:      aiData as AreaData,
  net:     networkingData as AreaData,
  hack:    hackingData as AreaData,
  soft:    softwareData as AreaData,
  crypto:  cryptoData as AreaData,
  cloud:   cloudData as AreaData,
  mobile:  mobileData as AreaData,
  devsec:  devsecData as AreaData,
  selfdev: selfdevData as AreaData,
}

export type { AreaData, AreaId }
export { AREA_META } from './types'
